const express = require('express');
const server = express();
const projectsRouter = require('./projects/projects-router')
const actionsRoter = require('./actions/actions-router')
// Complete your server here!
server.use(express.json())
server.use('/projects', projectsRouter)
server.use('/actions', actionsRoter)
// Do NOT `server.listen()` inside this file!


server.use((err, req, res)=>{
    console.log(err)
  
    res.status(500).json({
      message: "Something went wrong"
    })
  })
module.exports = server;
