//imports
require("dotenv").config();
const express=require("express");
const app=express();
const jwt = require('jsonwebtoken');

//routes imported
const student=require("./routes/student");
const headteacher=require("./routes/headteacher");
const teacher=require("./routes/teacher")

//middleware imported
const logger=require("./middleware/logger")
const errorcheck=require("./middleware/errorcheck")

//global middleware
app.use(express.json())
app.use(logger)

//middleware directions
app.use("/student",student)
app.use("/teacher",teacher)
app.use("/headteacher",headteacher)

app.post("/gtoken",(req,res)=>{
    let jwtsecretey=process.env.jWT_SECRET_KEY
    let data={
        userid: 1,
        time: Date()
    }
    const token=jwt.sign(data,jwtsecretey)
    res.send(token)
})

//catch all undefined routes
app.use((req,res,next)=>{
    const err = new Error(`cannot find this ${req.originalUrl} `)
    error.statusCode=404;
    error.status="fail";
    next(err)
})
app.use(errorcheck)

port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("server listening")
})