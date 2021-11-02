function getIndex(req, res) {
    res.render('index/index');
}

function getContact(req, res) {
    res.render('index/contact-us/index');
}

module.exports = {
    getIndex,
    getContact,
};