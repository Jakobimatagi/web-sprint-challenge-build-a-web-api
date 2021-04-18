// Write your "projects" router here!
const express = require('express')

const router = express.Router();

const projects = require('./projects-model')

router.get('/', (req, res, next)=>{
    projects.get()
    .then((projects)=>{
        res.status(200).json(projects)
    })
    .catch(
        (err)=>{
            next(err)
        }
    )
})