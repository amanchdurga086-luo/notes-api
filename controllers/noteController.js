const Note = require("../models/Note");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const validateObjectId = require("../utils/validateObjectId");
const ApiResponse = require("../utils/ApiResponse");

// Create Note
const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.create({
    title,
    content,
  });

  res.status(201).json(new ApiResponse("Note created successfully", note));
});

// Get All Notes
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find().sort({
    createdAt: -1,
  });

  res.status(200).json(
    new ApiResponse("Notes fetched successfully", notes, {
      count: notes.length,
    }),
  );
});

// Get Note By ID
const getNoteById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validateObjectId(id);

  const note = await Note.findById(id);

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  res.status(200).json(new ApiResponse("Note fetched successfully", note));
});

// Update Note
const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validateObjectId(id);

  const { title, content } = req.body;

  const updatedNote = await Note.findByIdAndUpdate(
    id,
    {
      title,
      content,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedNote) {
    throw new ApiError(404, "Note not found");
  }

  res
    .status(200)
    .json(new ApiResponse("Note updated successfully", updatedNote));
});

// Delete Note
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validateObjectId(id);

  const deletedNote = await Note.findByIdAndDelete(id);

  if (!deletedNote) {
    throw new ApiError(404, "Note not found");
  }

  res.status(200).json(new ApiResponse("Note deleted successfully"));
});

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
