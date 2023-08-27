const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        name: {
            type: String
        },
        count: {
            type: Number
        },
        price: {
            type: Number
        }
    },
    status : {
    type: String,
    required: true
}
},
{
    timestamps: true
});

module.exports = mongoose.model('Orders', orderSchema);
