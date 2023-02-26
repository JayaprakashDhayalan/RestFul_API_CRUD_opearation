const productSchema = require('../models/productSchema.js');
const { DataTypes } = require('sequelize');
const errorcode = require('../errorcode.js');

exports.createProduct = async (data) => {
    try {
        await productSchema(sequelize, DataTypes).sync();
        const crea = await productSchema(sequelize, DataTypes).create(data);
        return crea;
    } catch (error) {
        throw error;
    }
}
exports.getProduct = async (limit,offset) => {
    try {
        await productSchema(sequelize, DataTypes).sync()
        const response = await productSchema(sequelize, DataTypes).findAll({
            limit:limit,
            offset:offset
        })
        return response
    } catch (error) {
        throw error
    }
}
exports.getOneProduct = async (query) => {
    try {
        await productSchema(sequelize, DataTypes).sync()
        const result = await productSchema(sequelize, DataTypes).findOne(query)
        return result
    } catch (error) {
        throw error;
    }
}
exports.getUpdateProduct = async (param, update) => {
    try {
        await productSchema(sequelize, DataTypes).sync()
        const data = await productSchema(sequelize, DataTypes).update({ published: update },{
            where: {
                pId: param
            }
        })
        return data
    } catch (error) {
        throw error
    }
}
exports.deleteProduct = async(query) =>{
    try {
        await productSchema(sequelize,DataTypes).sync()
        const data = await productSchema(sequelize,DataTypes).destroy(query)
        return data
    } catch (error) {
        throw error 
    }
}