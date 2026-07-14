const Note = require("../models/Note");
const asyncHandler = require("../utils/asyncHandler");

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

    const note = await Note.findById(id);

    if (!note) {
        const error = new Error("Note not found");
        error.statusCode = 404;
        throw error;
    }

    res.status(200).json({
        success: true,
        data: note,
    });
});

// Update Note
const updateNote = asyncHandler(async (req, res) => {
    const { id } = req.params;

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
        const error = new Error("Note not found");
        error.statusCode = 404;
        throw error;
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

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
        const error = new Error("Note not found");
        error.statusCode = 404;
        throw error;
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
