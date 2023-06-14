const express = require('express')
const router = express.Router()
require('../config')
const logins = require('../collection')

router.get('/',(req,res)=>{
    res.send("hello from router")
})
// app.use(express.json())
router.post('/post',async(req,res)=>{

    const { name, email, password} = req.body
    let data = new logins({name,email,password})
    let result = await data.save()
    console.log(result)

    res.send({
        resp: "done"
    })
})
module.exports = router