const productRepo = require('../Repo/productRepo.js')
const errorcode = require('../errorcode.js')


exports.createProduct = async (data) => {
    try {
        const response = await productRepo.createProduct(data)
        return response
    } catch (error) {
        throw error;
    }
}

exports.getProduct = async (limit,offset) => {
    try {
        if(typeof limit === "string" && typeof offset ==="string"){
         limit = parseInt(limit)
         offset= parseInt(offset)
        if(isNaN(limit) || isNaN(offset))
            return errorcode.INVALID_INPUT_FORMAT_ERROR
        }
        const result = await productRepo.getProduct(limit,offset)
        return result
    } catch (error) {
        throw error;
    }
}
exports.getOneProduct = async (param) => {
    try {
        const query = { where: { pId: param } }
        const data = await productRepo.getOneProduct(query)
        if(data == null)
        return errorcode.INVALID_ID
        return data
    } catch (error) {
        throw error
    }
}
exports.getUpdateProduct = async (param, update) => {
    try {
        const response = await productRepo.getUpdateProduct(param, update)
        if(response == 0 ){
            return  errorcode.INVALID_ID  
        }
        else{
            return errorcode.UPDATE_SUCESS
        }
    } catch (error) {
        throw error
    }
}
exports.deleteProduct = async (param) => {
    try {
        const query = {where:{pId: param}}
        const result = await productRepo.deleteProduct(query)
        if(result == 0){
            return errorcode.INVALID_ID
        }
        else{
            return errorcode.DELETE_SUCESS
        }
    } catch (error) {
        throw error
    }
}

