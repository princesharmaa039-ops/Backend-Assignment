// Random dice generator using the crypto module: node dice.js [numberOfRolls]
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { log } = require('./modules/logger');

const HISTORY_PATH = path.join(__dirname, 'dice-history.txt');

function rollDice() {
  return crypto.randomInt(1, 7); // 1-6 inclusive
}

function simulateRolls(times) {
  const history = [];

  for (let i = 1; i <= times; i++) {
    const value = rollDice();
    console.log(`\u{1F3B2} Dice Rolled: ${value}`);
    history.push(`Roll ${i}: ${value}`);
  }

  // Bonus: store dice roll history in a text file
  fs.appendFile(HISTORY_PATH, history.join('\n') + '\n', (err) => {
    if (err) return log(`Could not save dice history: ${err.message}`, 'ERROR');
    log('Dice roll history saved to dice-history.txt', 'SUCCESS');
  });
}

const rolls = Number(process.argv[2]) || 5;
simulateRolls(rolls);
