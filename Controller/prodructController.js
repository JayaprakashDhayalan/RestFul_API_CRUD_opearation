const productService = require('../services/productService.js')
const { v4: uuidv4 } = require('uuid');


exports.createProduct= async(req,res)=>{
    try {
        req.body.pId = uuidv4();
        const prr = await productService.createProduct(req.body)
        res.status(201).json({
            prr
        })
    } catch (error) {
        throw error;
    }
}
exports.getProduct= async(req,res)=>{
    try {
        let limit = req.query.limit || 5
        let offset = req.query.offset || 1
        const result = await productService.getProduct(limit,offset)
        res.status(200).json({
            result
        })
    } catch (error) {
        throw error
    }
}

exports.getOneProduct = async (req, res)=>{
    try{
        let  query = req.params.id
        const get = await productService.getOneProduct(query)
        console.log("CONTROLLER", get);
        res.status(200).json({
            get
        })
    } catch(error){
        throw error;
    }
}
exports.getUpdateProduct = async (req,res)=> {
    try {
        let param = req.params.id
        let update = req.body.published
        const change = await productService.getUpdateProduct(param,update)
        res.status(200).json({
            change
        })
    } catch (error) {
        throw error;
    }
}
exports.deleteProduct = async(req,res) =>{
    try {
        let param = req.params.id
        const del = await productService.deleteProduct(param)
        res.status(200).json({
            del
        })
    } catch (error) {
        throw error
    }
}