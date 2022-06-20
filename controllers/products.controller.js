const products = require("../models/products.model")
const path = require("path")

exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/products.view.html"))
}

exports.addProduct = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const product = { id, title};
    products.push(product);
    res.status(201).json({
        success: true,
        products,
    })
}