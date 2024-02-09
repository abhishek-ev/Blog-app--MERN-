const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token=req.cookies.token
    
    if(!token){
        return res.status(401).json("you are not authenticated!")
    }
    jwt.verify(token,process.env.SECRET,async(err,data)=>{
        if(err){
            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({ error: "Token is expired" });
            }
            console.error(err); // Log other errors for debugging
            return res.status(500).json({ error: "Internal Server Error" });        
        }
        req.userId=data._id
        console.log("Token verified")
        next()
    })
}

module.exports=verifyToken