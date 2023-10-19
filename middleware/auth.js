const auth=(req,res,next)=>{
    console.log('auth middleware')
    const age=30;
    if(age>18){
            next();
    }
    else{
            res.send('user not allowed due to age')
    }
}
module.exports=auth;