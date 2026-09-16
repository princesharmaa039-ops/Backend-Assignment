// CLI-based calculator: node calculator.js <add|sub|mul|div|mod|pow> <num1> <num2>
const args = process.argv.slice(2);

function calculate(operation, a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Both operands must be valid numbers');
  }

  switch (operation) {
    case 'add':
      return a + b;
    case 'sub':
      return a - b;
    case 'mul':
      return a * b;
    case 'div':
      if (b === 0) throw new Error('Cannot divide by zero');
      return a / b;
    case 'mod': // bonus: extra operation
      return a % b;
    case 'pow': // bonus: extra operation
      return a ** b;
    default:
      throw new Error(`Unknown operation "${operation}". Use add, sub, mul, div, mod, or pow.`);
  }
}

function main() {
  const [operation, rawA, rawB] = args;

  if (!operation || rawA === undefined || rawB === undefined) {
    console.log('Usage: node calculator.js <add|sub|mul|div|mod|pow> <num1> <num2>');
    console.log('Example: node calculator.js add 10 5');
    process.exit(1);
  }

  try {
    const result = calculate(operation, Number(rawA), Number(rawB));
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
