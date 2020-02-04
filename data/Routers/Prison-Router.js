const router= require('express').Router();
const Prisons= require('../Models/Prisons-Model');

//get all prisons not protected


router.get('/', async (req,res) =>{
try {
    const prisons= await Prisons.find('prisons');
    res.status(201).json(prisons);
}catch (err){
    console.log(err);
    res.status(400)
    .json({err: 'failed to retrieve prisons'})
}
})


module.exports= router;