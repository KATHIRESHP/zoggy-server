const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true,
        name: {
            type: String
        },
        count: {
            type: Number
        },
        price: {
            type: Number
        }
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Carts', cartSchema);