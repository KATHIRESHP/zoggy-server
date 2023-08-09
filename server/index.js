const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')

require('dotenv').config();
const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', userRoutes)

mongoose.connect(process.env.MONGODB_URL)
    .then((data) => console.log("Db connected"))
    .catch((error) => console.log("Error in connection"))

app.listen(process.env.PORT, () => {
    console.log(`Server listening ${process.env.PORT}`)
})