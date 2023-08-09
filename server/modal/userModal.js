const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username :{
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    password:{
        type: String,
        required: true,
        min: 8
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("Users", userSchema);