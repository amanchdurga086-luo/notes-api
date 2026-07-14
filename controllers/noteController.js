const Note = require("../models/Note");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const validateObjectId = require("../utils/validateObjectId");

// Create Note
const createNote = asyncHandler(async (req, res) => {

    const { title, content } = req.body;

    const note = await Note.create({
        title,
        content,
    });

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: note,
    });

});

// Get All Notes
const getAllNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find().sort({
        createdAt: -1,
    });

    res.status(200).json({
        success: true,
        count: notes.length,
        data: notes,
    });
});


// Get Note By ID
const getNoteById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    validateObjectId(id);

    const note = await Note.findById(id);

    if (!note) {
       throw new ApiError(404, "Note not found");
    }

    res.status(200).json({
        success: true,
        data: note,
    });
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
        }
    );

    if (!updatedNote) {
        throw new ApiError(404, "Note not found");
    }

    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        data: updatedNote,
    });
});


// Delete Note
const deleteNote = asyncHandler(async (req, res) => {
    const { id } = req.params;

    validateObjectId(id);

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
       throw new ApiError(404, "Note not found");
    }

    res.status(200).json({
        success: true,
        message: "Note deleted successfully",
    });
});


module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
