//imports
const router=require("express").Router();

//routes
router.get("/",(req,res)=>{
    res.send("this is a student's account")
})





//export
module.exports=router;