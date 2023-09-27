const express = require('express')
const router = express.Router()
const posts = require('../../data/sample-data')

router.get('/',(req,res,next)=>{
    res.status(200).send(JSON.stringify(posts))
})

module.exports = router