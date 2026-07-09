
function logger(req,res,next){
    try{
        const date=new Date().toDateString();
        const time=new Date().toLocaleTimeString();


        console.log(`the date is ` + date);
        console.log(`the time is ` + time);
        console.log(`the http method is  ` +req.method )
        console.log(`the url is ` +req.url)
        next();
    }
    catch (err) {
        err.status="fail";
        err.statusCode=404;
        next(err);
    }

    
}



module.exports=logger;