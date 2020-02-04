const express = require('express');
const cors= require('cors');
const helmet= require('helmet');

const prisonersRouter = require('../data/Routers/Prisoners-Router')
const authRouter= require ('../auth/authRouter')
const prisonRouter= require ('../data/Routers/Prison-Router')

const server= express();


server.use(express.json());
server.use(cors());
server.use(helmet());
server.use('/api/prisoners', prisonersRouter);
server.use('/api/auth', authRouter);
server.use('/api/prisons', prisonRouter);

server.get('/', (req,res)=>{
    res.status(200).json({api:'test test'})
})

module.exports= server