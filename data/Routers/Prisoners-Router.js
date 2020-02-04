//colin and jordan
const router = require('express').Router();

const Prisoners = require('../Models/Prisoners-Model');

//api/auth/prisoners
router 
    .get('/', async (req, res) => {
        try {
            const prisoners = await Prisoners.find('prisoners');
            res.status(200).json(prisoners);
        } catch (error) {
            res.status(500).json({
                error: 'Issues getting Prisoners from the database'
            });
        }
    })

   

    module.exports = router;