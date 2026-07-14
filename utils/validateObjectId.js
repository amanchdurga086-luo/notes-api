const mongoose = require("mongoose");
const ApiError = require("./ApiError");

const validateObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid ObjectId");
    }
};

module.exports = validateObjectId;