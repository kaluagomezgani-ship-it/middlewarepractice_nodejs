//imports
require("dotenv").config();
const express=require("express");
const app=express();

//routes imported
const student=require("./routes/student");
const headteacher=require("./routes/headteacher");
const teacher=require("./routes/teacher")

//middleware imported
const logger=require("./middleware/logger")

//global middleware
app.use(express.json())
app.use(logger)

//middleware directions
app.use("/student",student)
app.use("/teacher",teacher)
app.use("/headteacher",headteacher)

port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("server listening")
})