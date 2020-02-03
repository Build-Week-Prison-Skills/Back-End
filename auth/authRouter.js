const express= require('express');
const router= express.Router();
const bcrypt= require ('bcryptjs');
const {newToken}= require('./authMid');
const Staff= require('../data/Models/Staff-Model');



router.post('/register',(req, res)=>{
    let staff= req.body;
    const hash= bcrypt.hashSync(staff.password, 10);
    staff.password= hash;

    
Staff.add(staff)
    .then(newStaff=>{
        res.status(201).json(newStaff)
    })
    .catch(err=>{
        console.log('register endpoint', err);
        res.status(500).json({
            message: 'unable to register'
        })
    })
});

module.exports= router