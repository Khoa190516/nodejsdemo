const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json([
        {
            id: "1",
            name: "Iphone 15"
        },
        {
            id: "2",
            name: "Iphone 15a"
        },
        {
            id: "3",
            name: "Iphone 15b"
        },
        {
            id: "4",
            name: "Iphone 15c"
        },
        {
            id: "5",
            name: "Iphone 15d"
        }
    ])
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        id: "2",
        name: "Samsung Galaxy Z Fold 5"
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    if (id !== null && id !== undefined) {
        res.status(200).json({
            message: "Product Found",
            productId: id,
            productName: "Apple Watch Ultra"
        })
    } else {
        res.status(404).json({
            message: "Error Product Not Found With ID: "+id,
            productId: id
        })
    }
})

module.exports = router