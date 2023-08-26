const Order = require('../modal/orderModal')
const Cart = require('../modal/cartModel')

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
module.exports.updatecart = async (req, res, next) => {
    try{
        const {email, items} = req.body;
        const cart = await Cart.findOne({email: email});
        if(cart)
        {
            cart.items = items;
            await cart.save();
            console.log(cart)
        }
        else
        {
            const new_cart = await Cart.create({
                email,
                items
            });
            console.log(new_cart);
            cart = new_cart;
        }
        res.json({cart});
    }catch(e){
        next(e);
    }
}

module.exports.getcart = async(req, res, next) => {
    try{
        const {email} = req.body;
        const cart = await Cart.find({email});
        console.log(cart);
        res.json({cart});
    }
    catch(e){
        next(e);
    }
}