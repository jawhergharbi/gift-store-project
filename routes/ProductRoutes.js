let express = require('express');
let router = express.Router();

const controllerUrl = '/products'

let service = require('../services/ProductService');



// GET All Product "/api/products"  
router.get(controllerUrl, (req, res, next) => {
    service.findAllProducts(req,res);
});
// POST add a Product "/api/products"  
router.post(controllerUrl, (req, res, next) => {
    service.saveProduct(req,res);
});
// DELETE delete a Product by id "/api/products"  
router.delete(controllerUrl+'/:id', (req, res, next) => {
    service.deleteProduct(req,res);
});


module.exports = router;