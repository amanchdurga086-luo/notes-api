const Note = require("../models/Note");

const createNote = async (title, content) => {
    return await Note.create({
        title,
        content,
    });
};

const getAllNotes = async () => {
    return await Note.find().sort({
        createdAt: -1,
    });
};

const getNoteById = async (id) => {
    return await Note.findById(id);
};

const updateNote = async (id, title, content) => {
    return await Note.findByIdAndUpdate(
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
};

const deleteNote = async (id) => {
    return await Note.findByIdAndDelete(id);
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};