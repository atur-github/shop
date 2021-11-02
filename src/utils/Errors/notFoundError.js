const { customError } = require('./customError');

class NotFoundError extends customError {
    constructor() {
        super('404, not found what you want!', 404);
    }
}

module.exports = NotFoundError;