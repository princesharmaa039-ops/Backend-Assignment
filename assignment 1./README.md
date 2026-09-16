# Smart Utility Toolkit

Lab Assignment 1 — Web Dev III (Node.js & Express Backend), Unit-1.
Built entirely with Node.js core modules (`process`, `http`, `fs`, `crypto`) — no external packages, no Express, no database.

## Structure

```
smart-utility-toolkit/
├── calculator.js       # 1. CLI calculator (process.argv)
├── app.js               # 2. Custom module demo (isEven)
├── server.js            # 3. HTTP server (http)
├── fileManager.js       # 4. File CRUD (fs)
├── dice.js              # 5. Dice roller (crypto)
├── test.txt             # scratch file used by fileManager.js
├── dice-history.txt     # created on first dice.js run (bonus)
└── modules/
    ├── isEven.js
    └── logger.js         # timestamped, colored console logging (bonus)
```

## Run each utility

```bash
# 1. Calculator
node calculator.js add 10 5
node calculator.js div 10 0      # graceful error
node calculator.js mod 10 3      # bonus operation

# 2. Custom module reuse (isEven)
node app.js

# 3. HTTP server — visit http://localhost:3000/, /about, /contact, or any other path
node server.js
node server.js 4000               # custom port

# 4. File manager (create -> read -> update -> read -> delete of test.txt)
node fileManager.js

# 5. Dice roller (crypto-based randomness)
node dice.js
node dice.js 10                   # roll 10 times, appends to dice-history.txt
```

## Notes

- All file operations (`fileManager.js`, `dice.js`) use the async, callback-based `fs` API, so console output shows execution order and sync-vs-async behavior (see `modules/logger.js` timestamps).
- `dice.js` uses `crypto.randomInt(1, 7)` for cryptographically secure randomness in the 1–6 range.
- Errors (invalid calculator operation, missing file, divide-by-zero) are all caught and reported instead of crashing the process.
