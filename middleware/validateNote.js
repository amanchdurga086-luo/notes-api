const ApiError = require("../utils/ApiError");

const validateNote = (req, res, next) => {

    const { title, content } = req.body;

    if (!title) {
        throw new ApiError(400, "Title is required");
    }

    if (!content) {
        throw new ApiError(400, "Content is required");
    }

    if (typeof title !== "string") {
        throw new ApiError(400, "Title must be a string");
    }

    if (typeof content !== "string") {
        throw new ApiError(400, "Content must be a string");
    }

    if (title.trim().length === 0) {
        throw new ApiError(400, "Title cannot be empty");
    }

    if (content.trim().length === 0) {
        throw new ApiError(400, "Content cannot be empty");
    }

    next(); //Move to the next middleware.

};

module.exports = validateNote;