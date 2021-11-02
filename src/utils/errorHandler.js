const { customError } = require('./Errors/customError');

function expressErrorHandler(err, req, res, next) {
    if(err instanceof customError){
        return res.redirect('/?handledError');
    }
    res.redirect('/?unhandledError');
}

module.exports = {
    expressErrorHandler
}