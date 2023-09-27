const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        order: "Apple 13 Ultra  Order"
    })
})

module.exports = router