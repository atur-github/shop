const {
    MustLoginError
} = require('./Errors/customerError');

module.exports = (req, res, next) => {
    if(req.session.user){
        next();
    } else {
        next(new MustLoginError());
    }
}