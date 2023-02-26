//const { DataTypes } = require("sequelize")

//const { DataTypes } = require("sequelize")

module.exports=(sequelize,DataTypes)=>{
const product = sequelize.define("product",{
    pId:{
        type:DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT
    },
    published: {
        type: DataTypes.BOOLEAN
    }


})
return product ;
}