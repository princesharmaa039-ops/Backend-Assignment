// Demonstrates creating a custom module (isEven) and reusing it via require()
const isEven = require('./modules/isEven');
const { log } = require('./modules/logger');

log('Starting Smart Utility Toolkit demo...', 'INFO');

const numbers = [3, 4, 7, 10, 15, 22];

numbers.forEach((n) => {
  const result = isEven(n) ? 'even' : 'odd';
  log(`${n} is ${result}`, 'SUCCESS');
});

log('Demo complete. Run calculator.js, server.js, fileManager.js, or dice.js individually to explore the other utilities.', 'INFO');
