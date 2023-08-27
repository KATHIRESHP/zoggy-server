const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const adminRoutes = require('./routes/adminRoutes')

require('dotenv').config();
const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', userRoutes)
app.use('/order', orderRoutes)
app.use('/admin', adminRoutes)

mongoose.connect(process.env.MONGODB_URL)
    .then((data) => console.log("Db connected"))
    .catch((error) => console.log("Error in connection\n", error))

app.listen(process.env.PORT, () => {
    console.log(`Server listening ${process.env.PORT}`)
})