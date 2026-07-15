const express = require("express");
const router = express.Router();
const validateNote = require("../middleware/validateNote");

const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

router.post("/", validateNote, createNote);

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.put("/:id", validateNote, updateNote);

// router.patch("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;
