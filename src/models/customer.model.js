const Customer = require('./customer.mongo');

async function emailExists(_email) {
    return await Customer.findOne({ email: _email });
}

async function newCustomerSave(_customer) {
    return await Customer.create({
        ..._customer
    });
}

async function checkPassword(_customer, _password) {
    return _customer.checkPassword(_password);
}

module.exports = {
    emailExists,
    newCustomerSave,
    checkPassword
}