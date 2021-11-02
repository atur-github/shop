function getLogin(req, res) {
    res.render('customer/login/index');
}

function getCart(req, res) {
    res.render('customer/cart/index');
}

module.exports = {
    getLogin,
    getCart
};