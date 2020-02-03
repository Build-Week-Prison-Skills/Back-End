const express = require('express');
const cors= require('cors');
const helmet= require('helmet');

const prisonersRouter = require('../data/Routers/Prisoners-Router')

const server= express();


server.use(express.json());
server.use(cors());
server.use(helmet());
server.use('/api/prisoners', prisonersRouter)

server.get('/', (req,res)=>{
    res.send('test test')
})

module.exports= server