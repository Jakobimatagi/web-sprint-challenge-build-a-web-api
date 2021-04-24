// Write your "projects" router here!
const express = require('express');
const { validateID, validateUser } = require('./middleware');

const router = express.Router();

const projects = require('./projects-model')

router.get('/api/projects', (req, res, next)=>{
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

router.get('/api/projects/:id', validateID, validateUser,(req, res, next)=>{
    
   res.json(req.project)
})


router.post('/api/projects', (req, res, next)=>{
    projects.insert(req.body)
    .then((proj)=>{
        res.status(201).json(proj)
    })
    .catch((err)=>{
        next(err)
    })
})


module.exports = router
