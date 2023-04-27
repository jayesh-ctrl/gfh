const jwt = require('jsonwebtoken');



module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];

        const verify = jwt.verify(token,'this is dummy text');

        console.log(token);
        if(verify.userType=='admin'){
            next();
        } else{
            return res.status(401).json({
                Message : 'Not Admin'
            })
        }
    }
    catch(error){
        return res.status(401).json({
            Message : 'Invalid Token'
        })
    }
}