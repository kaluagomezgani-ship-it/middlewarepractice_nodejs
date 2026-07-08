//hello world 

function logger(req,res,next){
    const date=new Date().toDateString();
    const time=new Date().toLocaleTimeString();


    console.log(`the date is ` + date);
    console.log(`the time is ` + time);
    console.log(`the http method is  ` +req.method )
    console.log(`the url is ` +req.url)

    next();
}

module.exports=logger;