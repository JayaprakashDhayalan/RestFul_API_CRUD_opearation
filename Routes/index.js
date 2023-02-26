const express = require('express')
const router = express.Router()
const productController = require('../Controller/prodructController.js')


router.route('/create_Product')
    .post(productController.createProduct)
router.route('/getAllProduct')
    .get(productController.getProduct)
router.route('/get_productBy_ID/:id')
    .get(productController.getOneProduct)
router.route('/updateProductBy_Id/:id')
    .patch(productController.getUpdateProduct)
router.route('/deleteProductBy_ID/:id')
    .patch(productController.deleteProduct)




module.exports = router;