// routes/studentRoutes.js
// Modular routing for all /students endpoints (CRUD operations).

const express = require("express");
const router = express.Router();
const students = require("../data/students");

// Helper: find index of a student by id
function findStudentIndex(id) {
  return students.findIndex((s) => s.id === id);
}

// Helper: basic validation for incoming student data
function isValidStudentBody(body) {
  return (
    body &&
    typeof body.name === "string" &&
    body.name.trim() !== "" &&
    typeof body.age !== "undefined" &&
    typeof body.course === "string" &&
    body.course.trim() !== ""
  );
}

// GET /students - fetch all students
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    count: students.length,
    data: students,
  });
});

// GET /students/:id - fetch a single student by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student id. ID must be a number.",
    });
  }

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found.`,
    });
  }

  res.status(200).json({ success: true, data: student });
});

// POST /students - create a new student
router.post("/", (req, res) => {
  const { name, age, course } = req.body;

  if (!isValidStudentBody(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Please provide valid 'name', 'age', and 'course' fields.",
    });
  }

  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    name,
    age,
    course,
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student created successfully.",
    data: newStudent,
  });
});

// PUT /students/:id - update an existing student
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student id. ID must be a number.",
    });
  }

  const index = findStudentIndex(id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found.`,
    });
  }

  const { name, age, course } = req.body;

  if (!isValidStudentBody(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Please provide valid 'name', 'age', and 'course' fields.",
    });
  }

  students[index] = { id, name, age, course };

  res.status(200).json({
    success: true,
    message: "Student updated successfully.",
    data: students[index],
  });
});

// DELETE /students/:id - delete a student
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student id. ID must be a number.",
    });
  }

  const index = findStudentIndex(id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found.`,
    });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: "Student deleted successfully.",
    data: deletedStudent,
  });
});

module.exports = router;
