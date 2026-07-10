# Electronics Components Reference Guide

---

## 1. Passive Components

### 1.1 Resistors
- Fixed Resistors: Carbon film, metal film, wire-wound, thick film, thin film
- Variable Resistors: Potentiometers, rheostats, trimmers
- Special Resistors:
  - Thermistors (NTC & PTC) — resistance changes with temperature
  - Photoresistors (LDR) — resistance changes with light
  - Varistors (VDR/MOV) — resistance changes with voltage (surge protection)

### 1.2 Capacitors
- Ceramic Capacitors: Class 1 (C0G/NP0), Class 2 (X7R, X5R, Y5V)
- Electrolytic Capacitors: Aluminum electrolytic, Tantalum electrolytic
- Film Capacitors: Polyester (Mylar), Polypropylene, Polycarbonate, Polystyrene
- Variable Capacitors: Trimmer capacitors, tuning capacitors
- Supercapacitors: Electric double-layer capacitors (EDLC), pseudo-capacitors
- Special Capacitors: Feed-through capacitors, motor-run capacitors

### 1.3 Inductors & Coils
- Fixed Inductors: Air core, iron core, ferrite core
- Variable Inductors: Tunable coils, slug-tuned inductors
- Chokes: Common-mode chokes, differential-mode chokes, RF chokes
- Transformers: Power transformers, audio transformers, RF transformers, pulse transformers, current transformers
- Ferrite Beads: EMI suppression beads, chip ferrite beads

---

## 2. Active Components

### 2.1 Diodes
- Rectifier Diodes: General purpose, fast-recovery, Schottky, ultra-fast
- Zener Diodes: Voltage regulation, voltage reference
- Light-Emitting Diodes (LEDs): Standard, infrared, UV, RGB, high-power, COB
- Photodiodes: PIN photodiodes, avalanche photodiodes
- Tunnel Diodes: High-frequency oscillators
- Varactor Diodes: Voltage-controlled capacitance (tuning circuits)
- Transient Voltage Suppression (TVS) Diodes: Surge protection
- Laser Diodes: Fiber optics, CD/DVD/laser pointers
- Step-Recovery Diodes: Frequency multipliers
- Gunn Diodes: Microwave oscillators

### 2.2 Transistors
- Bipolar Junction Transistors (BJTs):
  - NPN, PNP
  - Small-signal, power, Darlington pairs, switching
- Field-Effect Transistors (FETs):
  - JFET (N-channel, P-channel)
  - MOSFET (N-channel, P-channel)
    - Enhancement mode, depletion mode
    - Logic-level, power MOSFETs
- Insulated-Gate Bipolar Transistors (IGBTs): High-power switching
- Unijunction Transistors (UJTs): Timer/trigger circuits
- Dual-Gate MOSFETs: RF/mixer applications

### 2.3 Thyristors & Triacs
- Silicon-Controlled Rectifiers (SCRs): Power control, motor drives
- TRIACs: AC power control (dimmers)
- DIACs: Triggering TRIACs
- Gate Turn-Off Thyristors (GTOs): High-power switching
- Silicon-Controlled Switches (SCSs): Four-layer devices
- Phototyristors / Photo-SCRs: Optically triggered

---

## 3. Integrated Circuits (ICs)

### 3.1 Linear / Analog ICs
- Operational Amplifiers (Op-Amps): General purpose, precision, high-speed, low-noise, rail-to-rail
- Voltage Regulators: Linear (78xx, 79xx, LM317), low-dropout (LDO)
- Voltage References: Bandgap, buried zener
- Comparators: General purpose, high-speed, window comparators
- Timers: NE555, CMOS variants
- Phase-Locked Loops (PLLs): Frequency synthesis, clock recovery
- Analog Switches / Multiplexers: CMOS switches, analog multiplexers

### 3.2 Digital ICs
- Logic Gates: AND, OR, NOT, NAND, NOR, XOR, XNOR (74xx, 40xx series)
- Flip-Flops: D, JK, SR, T types
- Counters: Decade, binary, up/down, ring counters
- Shift Registers: Serial-in/parallel-out, parallel-in/serial-out
- Decoders / Encoders: BCD-to-7-segment, binary decoders, priority encoders
- Multiplexers / Demultiplexers: Data selection and routing
- Adders / Arithmetic ICs: Half-adders, full-adders, ALUs
- Memory ICs: SRAM, DRAM, EEPROM, Flash (NOR, NAND), FRAM

### 3.3 Mixed-Signal ICs
- Analog-to-Digital Converters (ADCs): SAR, flash, delta-sigma, dual-slope
- Digital-to-Analog Converters (DACs): R-2R, weighted resistor, current-steering
- Microcontrollers (MCUs): AVR, PIC, ARM Cortex-M, MSP430, ESP32, STM32
- Microprocessors (MPUs): ARM Cortex-A, x86, RISC-V
- Digital Signal Processors (DSPs): Audio, video, communications processing
- System-on-Chip (SoC): Raspberry Pi SoC, FPGA SoCs
- Field-Programmable Gate Arrays (FPGAs): Xilinx, Altera/Intel, Lattice

### 3.4 Special-Purpose ICs
- Audio Amplifiers: Class A, B, AB, D (LM386, TDA2030)
- Radio / RF ICs: Transceivers, receivers, transmitters
- Motor Driver ICs: H-bridge drivers (L293D, L298N)
- Display Driver ICs: LED, LCD, OLED, VFD drivers
- Sensor Interface ICs: Signal conditioning, bridge amplifiers
- Power Management ICs (PMICs): Multi-rail power supplies, battery chargers
- Watchdog Timers / Supervisors: Reset generators, brownout detectors

---

## 4. Optoelectronic Components

- LEDs (see Diodes above for varieties)
- 7-Segment Displays: Common anode, common cathode
- Dot Matrix Displays: 5×7, 8×8
- OLED Displays: Monochrome, RGB
- LCDs: Character, graphical, TFT, IPS
- eInk / ePaper Displays
- Laser Diodes
- Photodiodes / Phototransistors
- Optocouplers / Opto-isolators: LED + phototransistor, LED + TRIAC, LED + photodiode
- Optical Fiber Components: Transmitters, receivers, connectors

---

## 5. Electro-Mechanical Components

### 5.1 Switches
- Toggle Switches: SPST, SPDT, DPST, DPDT
- Push-Button Switches: Momentary, latching, illuminated
- Rotary Switches: Multi-position, rotary encoders
- Slide Switches: SPDT, DPDT
- DIP Switches: Program configuration
- Reed Switches: Magnetic activation
- Mercury Switches: Tilt/position sensing
- Microswitches / Limit Switches: Snap-action switches

### 5.2 Relays
- Electromechanical Relays: SPST, SPDT, DPDT, multi-pole
- Reed Relays: Fast switching, low contact resistance
- Solid-State Relays (SSRs): No moving parts, AC/DC switching
- Latching Relays: Bistable, pulse-operated

### 5.3 Connectors
- Board-to-Board: Header/pin, mezzanine, edge connectors
- Wire-to-Board: JST, Molex, Berg
- Wire-to-Wire: Crimp, IDC, twist-on
- Circular Connectors: DIN, XLR, MIL-SPEC
- Rectangular Connectors: D-Sub, Centronics, card edge
- RF Connectors: BNC, SMA, SMB, N-type, UHF, F-type
- Audio/Video Connectors: RCA, 3.5mm, 6.35mm, HDMI, DisplayPort, USB
- Power Connectors: Barrel jack, IEC, XT60, Deans, battery snaps
- Terminal Blocks: Screw type, spring cage, pluggable

### 5.4 Sockets
- IC Sockets: DIP, PLCC, SIP, ZIF
- Transistor Sockets
- Bulb/Lamp Sockets

---

## 6. Electromagnetic Components

- Speakers / Transducers: Dynamic, piezoelectric, electret
- Microphones: Dynamic, condenser, electret, MEMS
- Buzzers: Piezoelectric, electromagnetic
- Bells / Sirens
- Motors: DC, stepper, servo, BLDC, AC induction, synchronous
- Solenoids: Push/pull, rotary, latch
- Electromagnets

---

## 7. Circuit Protection Components

- Fuses: Glass tube, ceramic, blade, SMD, resettable (PTC), high-voltage
- Circuit Breakers: Thermal, magnetic, thermal-magnetic, MCB, MCCB
- TVS Diodes / Varistors (MOVs): Transient suppression
- Gas Discharge Tubes (GDTs): Surge protection
- Spark Gaps: High-voltage protection
- PolySwitches / PTCs: Self-resetting fuses
- Surge Protection Devices (SPDs)

---

## 8. Frequency Control & Timing

- Crystal Oscillators (XO): AT-cut, tuning fork (32.768 kHz)
- Crystal Oscillator Modules (SPXO): Packaged oscillators with built-in drive
- Temperature-Compensated Crystal Oscillators (TCXO)
- Voltage-Controlled Crystal Oscillators (VCXO)
- Oven-Controlled Crystal Oscillators (OCXO)
- MEMS Oscillators: Silicon-based timing
- Ceramic Resonators: Lower-cost alternative to crystals
- SAW Devices: Filters, resonators, delay lines
- Rubidium / Cesium Clocks: Atomic frequency standards

---

## 9. Sensors & Transducers

- Temperature: Thermistor, RTD, thermocouple, IC (LM35, DS18B20)
- Light: Photoresistor, photodiode, phototransistor, ambient light sensor
- Pressure: Piezoelectric, strain-gauge, capacitive, MEMS
- Humidity: Capacitive, resistive, psychrometric
- Accelerometers: MEMS, piezoelectric
- Gyroscopes: MEMS, fiber-optic
- Magnetometers: Hall effect, magnetoresistive, fluxgate
- Proximity: Inductive, capacitive, ultrasonic, infrared
- Motion / PIR: Passive infrared
- Gas / Chemical: MQ series, electrochemical, semiconductor
- Flow: Turbine, thermal mass, ultrasonic
- Force / Load: Strain gauge, load cell
- Sound / Vibration: Microphone, piezo vibration sensor
- Position / Angle: Potentiometer, encoder (optical, magnetic), resolver
- Current: Shunt resistor, Hall-effect, current transformer
- Voltage: Voltage dividers, isolation amplifiers

---

## 10. Passive Specialty Components

- Attenuators: Fixed, variable, stepped (Pi, T, L-pad)
- BALUNs: Balanced-to-unbalanced transformers
- Delay Lines: Passive, active
- Filters: LC, crystal, ceramic, SAW, cavity
- Isolation Transformers: 1:1 for safety
- Antennas: Dipole, monopole, patch, loop, Yagi, helical, PCB trace

---

## 11. Power Sources

- Batteries:
  - Primary (non-rechargeable): Alkaline, lithium, zinc-carbon, silver oxide
  - Secondary (rechargeable): Li-ion, Li-Po, NiMH, NiCd, lead-acid, LiFePO4
- Solar Cells / Photovoltaic Panels
- Fuel Cells
- AC/DC Power Supplies: Linear, switch-mode (SMPS)
- DC/DC Converters: Buck, boost, buck-boost, SEPIC, Ćuk
- AC/AC Converters: Transformers, auto-transformers, cycloconverters
- UPS Systems: Uninterruptible power supplies
- Energy Harvesting Modules: Piezoelectric, thermoelectric (TEG), RF

---

## 12. Wiring & Interconnect

- Wire Types: Hook-up wire, magnet wire, coaxial, ribbon cable, twisted pair, shielded cable, bus bar
- Cable Assemblies: Flat flex (FFC), flexible printed (FPC), harnesses
- Solder: Leaded (60/40, 63/37), lead-free (SAC305), silver solder
- Heat Shrink Tubing: Standard, adhesive-lined, dual-wall
- Cable Ties / Lacing Cord
- Terminal Lugs / Ring / Spade / Fork Connectors

---

## 13. Printed Circuit Board (PCB) Components

- Substrate Materials: FR-4, CEM-1, CEM-3, Rogers, polyimide, aluminum clad
- Surface Mount Technology (SMT) Pads / Pads
- Vias: Through-hole, blind, buried, micro-via
- Traces / Tracks: Copper traces, impedance-controlled
- Solder Mask: Green, blue, red, black, etc.
- Silkscreen: Component designators, logos
- Copper Pour / Ground Plane
- Edge Connectors / Gold Fingers

---

## 14. Discrete Semiconductor Packages

- Through-Hole: TO-92, TO-220, TO-247, TO-3, DIP, SIP
- Surface-Mount (SMD):
  - 2-pin: SOD-123, SOD-323, DO-214 (AA/AB/AC)
  - 3-pin: SOT-23, SOT-223, DPAK, D2PAK
  - IC packages: SOIC, MSOP, TSSOP, QFP, QFN, BGA, LGA, CSP

---

## 15. Thermal Management

- Heat Sinks: Extruded, stamped, bonded, cast, folded-fin
- Thermal Interface Material (TIM): Thermal paste, thermal pads, phase-change
- Heat Pipes: Copper, sintered wick
- Thermoelectric Coolers (Peltier Modules)
- Fans / Blowers: Axial, centrifugal
- Thermal Tape / Adhesive

---

## Key Electronic Components Overview

### 1. Resistor
Opposes the flow of electric current. Used to limit current and divide voltages.

### 2. Capacitor
Stores electrical energy in an electric field. Blocks DC current but allows AC to pass. Used for smoothing and filtering.

### 3. Inductor (Coil)
Stores electrical energy in a magnetic field. Resists changes in current. Used in tuning circuits and power supplies.

### 4. Transformer
Transfers electrical energy between two circuits via electromagnetic induction. Used to step up or step down AC voltage.

### 5. Diode
Allows current to flow in only one direction (forward bias) and blocks it in the reverse. Used for rectification (converting AC to DC).

### 6. Light Emitting Diode (LED)
A special diode that emits light when current flows through it. Used for indicators, displays, and lighting.

### 7. Transistor (BJT)
A semiconductor device used to amplify weak signals or act as a high-speed electronic switch. Comes in NPN and PNP types.

### 8. Field Effect Transistor (FET / MOSFET)
A voltage-controlled transistor. It has very high input resistance and is the fundamental building block of modern microprocessors and memory chips.

### 9. Thyristor (SCR - Silicon Controlled Rectifier)
A latching switch. Once triggered, it stays "ON" until the current drops to zero. Used in AC power control and motor drives.

### 10. Integrated Circuit (IC / Chip)
A miniaturized electronic circuit containing thousands to billions of components (transistors, resistors) etched onto a single silicon chip. Examples include microcontrollers, op-amps, and logic gates.

### 11. Switch
A manual electromechanical component used to open or close a circuit, allowing or stopping the flow of electricity.

### 12. Relay
An electromagnetic switch. A small electric current controls a coil that mechanically opens or closes a separate set of contacts to control a much larger current.

### 13. Fuse
A safety device containing a thin wire that melts and breaks the circuit if the current exceeds a safe level, protecting equipment from fire and damage.

### 14. Crystal Oscillator (XTAL)
A quartz crystal that vibrates at a precise frequency when voltage is applied. It provides the accurate "clock signal" (heartbeat) for microcontrollers, computers, and watches.

### 15. Sensor (Transducer)
A component that detects physical changes in the environment (heat, light, pressure, sound) and converts them into electrical signals. Examples: Thermistor (temperature), LDR (light), Microphone (sound).

### 16. Battery / Power Source
Provides the DC (direct current) voltage and energy needed to power the entire electronic circuit. Converts chemical energy (or solar/AC) into electrical energy.