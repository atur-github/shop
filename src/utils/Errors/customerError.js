const { customError } = require('./customError');

class UserExistsError extends customError {
    constructor() {
        super('Oops! Email has been registered!', 400);
    }
}

class BadCreditinalsError extends customError {
    constructor() {
        super('Oops! Email or password is wrong!', 400);
    }
}

class MustLoginError extends customError {
    constructor() {
        super('You have to login first!', 401);
    }
}

module.exports = {
    UserExistsError,
    BadCreditinalsError,
    MustLoginError,
};