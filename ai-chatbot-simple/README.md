# Simple AI Chatbot (Local / Offline)

This is a minimal chatbot with:
- `index.html` frontend
- `server.js` Node.js backend

It uses **offline** modes (`echo` and `local-qa`). If you want real AI answers, edit `/api/chat` in `server.js` to call your LLM provider.

## Run

1) Open a terminal in this folder:

```bash
cd "c:/Users/DONALD-J/Desktop/VS CODE/ai-chatbot-simple"
```

2) Start the server:

```bash
node server.js
```

3) Open in your browser:

- http://localhost:3000

## Test API

```bash
curl -N -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"hello\",\"mode\":\"local-qa\"}"
```

