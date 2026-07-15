const Note = require("../models/Note");

const createNote = async (title, content) => {
    return await Note.create({
        title,
        content,
    });
};

module.exports = {
    createNote,
};