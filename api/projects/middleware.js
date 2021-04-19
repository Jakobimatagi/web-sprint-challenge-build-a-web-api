const projects = require('./projects-model')


function validateID(){
    return(req, res, next)=>{
        projects.getbyID(req.params.id)
        .then((proj)=>{
            if(proj){
                    req.project = proj
                next()
            }else{
            res.status(404).json({
                message: "User not found"
            })
        
        }
        })
        .catch((err)=>{
            next(err)
        })
    }
}


module.exports = {
    validateID
}