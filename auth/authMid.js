const Jwt = require('jsonwebtoken');
const tkn = process.env.JWT_SECRET || 'shhh you need a secret';


function restricted (req,res, next){
    const token= req.get('Authorization');

    if(token) {
        Jwt.verify(token, tkn, (err, decoded)=>{
            if(err) return res.status(400).json(err);
            req.decoded= decoded

            next();
        });
    }else{
        return res.status(400).json({
            error: 'No token, you shall not pass',
        });
    }
}

function newToken(staff) {
    const payload= {
        subject: staff.id,
        username: staff.username,
    };
    const options= {
        expiresIn: '7d',

    };
    const secret= tkn;
    return Jwt.sign(payload, options, secret)
}







module.exports= {
    restricted,
    newToken,
}