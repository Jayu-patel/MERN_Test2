require("dotenv").config()
const mongoose = require('mongoose')
const DB = process.env.LINK

mongoose.connect(DB)
.then(()=>{
    console.log('connection successful')
}).catch(e => console.log('error',e))