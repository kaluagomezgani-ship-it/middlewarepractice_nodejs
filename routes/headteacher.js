//imports
const router=require("express").Router();

//middleware
function checkifadmin(req,res,next){
    if(req.query.admin!=="true"){
        return res.status(401).json({message: "you are not an admin"})
    }
    else{
        console.log("welcome admin")
        next();
    }
}

//routes
router.get("/admin",checkifadmin,(req,res)=>{
    res.send("this is a headteachers account")
})





//export
module.exports=router;