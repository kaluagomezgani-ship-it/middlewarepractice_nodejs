//imports
const router=require("express").Router();

//middleware
function checkifadmin(req,res,next){
    if(req.query.admin!=="true"){
        const err=new Error(`you are not an admin`);
        err.statusCode = 401;
        err.status="error";        
        return next(err)
    }    
    console.log("you are an admin")
    next();    
}

//routes
router.get("/admin",checkifadmin,(req,res)=>{
    res.send("this is a headteachers account")
})





//export
module.exports=router;