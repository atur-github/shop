function getProductsList(req, res){
    res.render('product/list/index')
}

function getProductDetails(req, res) {
    res.render('product/details/index');
}

module.exports = {
    getProductsList,
    getProductDetails
}