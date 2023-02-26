
const Sequelize = require("sequelize");
require('dotenv').config();


async function DBConnection() { 
    try {
        const sequelize = new Sequelize(process.env.SQL_DB_NAME, process.env.SQL_DB_USER_NAME, process.env.SQL_DB_PWD, 
            {host: process.env.SQL_DB_HOST, dialect: process.env.SQL_DB})
            await sequelize.authenticate();
            global.sequelize = sequelize;
            console.log('DB connection successfull'); 
        } catch (error) { 
            throw error;
        }
}
 
 
 module.exports = DBConnection;

