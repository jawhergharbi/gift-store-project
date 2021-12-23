mongoose = require('mongoose');

let Product = require('../models/Product');


const DIR = './src/images/';

exports.findAllProducts = function (req, res) {
    Product.find().then(data => {
        if (data.products) {
            res.status(200).json({
                message: "Products retrieved successfully!",
                products: data
            });
        } else {
            res.status(404).json({
                message: "There are no products",
                products: data
            });
        }
    });
}

findProductByCategoryAndName = function (req, res) {

    Product.find({name: req.body.name, category: req.body.category})
        .then(data => {
            return data;
        });
}
exports.saveProduct = function (req, res) {
    console.log(req.body)
    let result = findProductByCategoryAndName(req, res)
    if (result) {
        // update(req, res)
    } else {
        const url = req.protocol + '://' + req.get('host')

        let newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            quantity: req.body.quantity
            //image: url + '/public/' +req.body.image
        });

        newProduct.save(newProduct).then(result => {
            console.log("this is the result of a product", result);

            res.status(201).json({
                message: "Product created successfully!",
                productCreated: {
                    _id: result._id,
                    name: result.name,
                    price: result.price,
                    category: result.category,
                    quantity: result.quantity,
                }
            })
        }).catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                });
        });
    }
}

exports.deleteProduct = function (req, res) {
    Product.deleteOne({_id: req.params.id}).then(result => {
        if (result.deletedCount > 0) {
            res.status(204).json({message: "Product deleted successfully!"});
        } else {
            res.status(404).json({message: "Product not found!"});
        }
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    });
}