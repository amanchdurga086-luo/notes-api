class ApiResponse {
    constructor(message = "Success", data = null, meta = {}) {
        this.success = true;
        this.message = message;
        this.data = data;
        this.meta = meta;
    }
}

module.exports = ApiResponse;