// middleware/logger.js
// Custom logger middleware — logs method, URL, and timestamp for every request.

function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next(); // pass control to the next middleware/route handler
}

module.exports = logger;
