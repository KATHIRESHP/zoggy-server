const nodemailer = require('nodemailer');
const User = require('../modal/userModal')

module.exports.login = async (req, res, next) => {
    try{
        console.log("Login called")
    }
    catch(error)
    {
        next(error);
    }
}
module.exports.emailverify = async (req, res, next) => {
    console.log("Email verificaiton called")
    try{
        const email = req.body.email;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: "20bcs4038@mkce.ac.in",
                pass: "Neet*2023"
            }
        });

        const otp = String(Math.round(Math.random() * 1000000));

        const mailOptions = {
            from : "Zoggy e-commerce",
            to: email,
            subject: "ZOGGY registeration OTP",
            text: `Your otp for registering with Zoggy is \n${otp}\n is valid until you refresh the page`
        }

        transporter.sendMail(mailOptions, (error, data) => {
            if(error)
            {
                console.log(`Error in sending mail to ${email} \n`, error);
            }
            else{
                console.log(`Otp send successfully to ${email} \n`, data.response);
            }
        })
        res.json({status: true, otp:otp});
    }
    catch(error)
    {
        next(error);
    }
}
module.exports.register = async (req, res, next) => {
    console.log("Registeration called")
    try{
        const username = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const usernameCheck = await User.findOne({username: username});
        if(usernameCheck)
            return res.json({msg: "Username already used", status: false});
        const emailCheck = await User.findOne({email: email});
        if(emailCheck)
            return res.json({msg: "Email already used", status: false});
        const user = await User.create({
            username,
            email,
            password
        });
        await delete user.password;
        res.json({msg:"User created", status: true, user});
    }
    catch(error)
    {
        next(error);
    }
}