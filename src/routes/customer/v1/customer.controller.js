const { 
    emailExists,
    newCustomerSave,
    checkPassword
} = require('../../../models/customer.model');
const {
    UserExistsError,
    BadCreditinalsError
} = require('../../../utils/Errors/customerError');

function getLogin(req, res) {
    res.render('customer/login/index');
}

async function postLogin(req, res, next) {
    // Check email exists
    const account = await emailExists(req.body.email);
    if(!account) {
        return next(new BadCreditinalsError());
    }

    // Check password
    const checkPass = await checkPassword(account, req.body.password);
    if(!checkPass) {
        return next(new BadCreditinalsError());
    }

    // if success redirect /
    req.session.user = account;

    if(req.body.remember) {
        req.sessionOptions.maxAge = 365 * 24 * 60 * 60 * 1000;
    }

    return res.redirect('/?login=success');
}

async function postRegister(req, res, next) {
    try{
        // Check the email to not exists
        const account = await emailExists(req.body.email);
        if(account){
            return next(new UserExistsError())
        }
        // Create new user and save
        await newCustomerSave(req.body);
    
        // Return 201 and redirect /login
        req.session.user = account;
        return res.redirect('/login?redister=succes');
    } catch(err) {
        next(err);
    }
}

function logout(req, res, next) {
    req.session = null;
    res.redirect('/?logout=success');
}

function getCart(req, res) {
    res.render('customer/cart/index');
}

module.exports = {
    getLogin,
    postLogin,
    postRegister,
    getCart,
};