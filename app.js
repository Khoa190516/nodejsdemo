const express = require('express')
const app = express()
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const postRoutes = require('./api/routes/posts')
const cors = require('cors')

app.use(cors({
    origin: "*"
}))

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use('/posts', postRoutes)

module.exports = app