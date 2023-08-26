const Order = require('../modal/orderModal')

module.exports.placeOrder = async (req, res, next) => {
    try{
        const {email, items, status} = req.body;
        console.log(items);
        const order = await Order.create({
            email,
            items,
            status
        })

        res.json({status: true, order})
    }
    catch(error){
        next(error);
    }
}

module.exports.getOrders = async (req, res, next) => {
    try{
        const email = req.body.email;
        const orders = await Order.find({
            email
        })
        res.json({status: true, orders});
    }   
    catch(error)
    {
        next(error);
    }
}