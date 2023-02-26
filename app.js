const express = require('express');
const app = express()
const router = require('./Routes/index.js')
const DBConnection = require('./dbConnect');
const dotenv = require('dotenv');
dotenv.config();



app.use(express.json());
app.use('/v1',router)

DBConnection()
const port = process.env.PORT||2002
app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})
module.exports= app