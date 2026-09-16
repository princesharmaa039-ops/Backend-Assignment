// app.js
// Entry point of the Student Management REST API.

const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- Global Middleware ----------
app.use(express.json()); // parse incoming JSON request bodies
app.use(logger); // custom logger middleware (logs every request)

// ---------- Routes ----------
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Student Management REST API",
    endpoints: {
      getAllStudents: "GET /students",
      getStudentById: "GET /students/:id",
      createStudent: "POST /students",
      updateStudent: "PUT /students/:id",
      deleteStudent: "DELETE /students/:id",
    },
  });
});

app.use("/students", studentRoutes); // modular routing

// ---------- 404 Handler (unmatched routes) ----------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found.`,
  });
});

// ---------- Global Error Handler ----------
// Catches any errors passed via next(err) or thrown synchronously in routes.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ---------- Start Server ----------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
