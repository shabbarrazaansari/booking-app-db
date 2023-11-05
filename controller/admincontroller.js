const express = require('express');
const path = require('path');
const User = require('../modal/user');
const json = require('sequelize');





exports.bookingapp = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','booking.html'))
    

}
exports.getregister = (req,res,next)=>{
    const register = async (req, res, next) => {
    console.log(req.body);
    const namee = req.body.name;
    const emaill = req.body.email;
    const phonee = req.body.phone;

    try {
        const result = await User.create({ name: namee, email: emaill, phone: phonee });
        console.log("Success");
        res.send("Success"); // Send a response to the client
        res.redirect('/bookingstatus'); // Perform the redirection
    } catch (error) {
        console.log(error);
        // Handle the error, perhaps by sending an error response
        res.status(500).send("Registration failed");
    }
};

module.exports = { register };

}
exports.getData = (req,res,next)=>{
    User.findAll().then(result=>res.status(201).json({details:result}))
    .catch(err=>console.log("err",err))
}
exports.status = (req,res,next)=>{
    res.send('registration succesful')
    //res.sendFile(path.join(__dirname,'../','views','status.html'))
}