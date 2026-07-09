const Note = require("../models/Note");

const createNote = async (req, res) => {

    try {

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

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    createNote,
};