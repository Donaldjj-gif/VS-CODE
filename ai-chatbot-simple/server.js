const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const publicDir = path.join(__dirname);
const indexPath = path.join(publicDir, 'index.html');

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function smartOfflineAnswer(message) {
  const m = message.toLowerCase();
  if (/hello|hi|hey/.test(m)) return 'Hello! What can I help you with?';
  if (/help|how do i|how to/.test(m)) return 'Try asking a question about something you want to build. Example: "How do I make a to-do app?"';
  if (/ai|chatbot|llm/.test(m)) return 'A chatbot is a program that responds to text. This demo uses offline “modes”, but you can connect it to a real LLM by editing server.js.';
  if (/your name|who are you/.test(m)) return 'I’m a simple local chatbot running in Node.js.';

  // tiny “QA” style response: extract a keyword and echo with structure
  const keywords = [];
  const words = m
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(w => w.length >= 4);

  for (const w of words) {
    if (!keywords.includes(w)) keywords.push(w);
    if (keywords.length >= 4) break;
  }

  if (keywords.length) {
    return `I heard: ${message.trim()}.\nKey terms: ${keywords.join(', ')}.\n\nWant a step-by-step plan or a code example?`;
  }

  return `You said: "${message.trim()}".\nCan you tell me what you’re trying to achieve?`;
}

function streamText(res, text, opts = {}) {
  const { chunkSize = 8, delayMs = 20 } = opts;
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    'X-Accel-Buffering': 'no',
    'Transfer-Encoding': 'chunked',
  });

  let i = 0;
  const timer = setInterval(() => {
    if (i >= text.length) {
      clearInterval(timer);
      res.end();
      return;
    }
    const chunk = text.slice(i, i + chunkSize);
    i += chunkSize;
    res.write(chunk);
  }, delayMs);
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    const html = fs.readFileSync(indexPath, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1e6) {
        req.destroy();
      }
    });

    req.on('end', () => {
      try {
        const { message, mode } = JSON.parse(raw || '{}');
        const safeMessage = typeof message === 'string' ? message : '';
        const safeMode = typeof mode === 'string' ? mode : 'local-qa';

        if (!safeMessage.trim()) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Missing message' }));
          return;
        }

        let answer = '';
        if (safeMode === 'echo') {
          answer = `Echo: ${safeMessage}`;
        } else {
          answer = smartOfflineAnswer(safeMessage);
        }

        streamText(res, answer, { chunkSize: 10, delayMs: 18 });
      } catch (e) {
        sendJson(res, 400, { error: 'Invalid JSON body' });
      }
    });

    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Simple AI chatbot running at http://localhost:${PORT}`);
  console.log(`POST /api/chat with { message, mode } (mode: echo | local-qa)`);
});

