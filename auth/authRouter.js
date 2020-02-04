//Jordan and coin reg
//colin and jordand login

const express= require('express');
const router= express.Router();
const bcrypt= require ('bcryptjs');
const {newToken}= require('./authMid');
const Staff= require('../data/Models/Staff-Model');
const Prisoners = require('../data/Models/Prisoners-Model');



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

    router.post('/login', (req, res) => {
        let {username, password} = req.body;

        Staff.findBy({username})
            .first()
            .then(staff => {
                console.log(staff, password)
                if (staff && bcrypt.compareSync(password, staff.Password)) {
                    const token = newToken(staff);
                        res.status(200).json({
                            message: `Welcome Back ${staff.UserName}.`,
                            token
                        });
                } else {
                    res.status(400).json({ message: 'Wrong username or password'});
                }
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({message: 'failed to login'})
            });

    });

    router.post('/prisoners', async (req, res) => {
        const prisoners = req.body;
        console.log(prisoners)
        if(!prisoners.name || !prisoners.skills ) {
            return res.status(401).json({message: 'Please provide all required fields'});

        } try {
            const newPrisoner = await Prisoners.add(prisoners);
            res.status(200).json({message: 'Prisoner was added to the DB'})

        } catch (error) {
            console.log(error);
            res
                .status(404).json({
                    error: 'unable to add Priosner to the DB'
                })
        }
    })


   


module.exports= router;