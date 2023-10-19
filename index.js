// const http=require("http")//core module
// const {dummy}=require("./dummy")


// const details=JSON.stringify(dummy)
// const app=http.createServer((req,res)=>{
//     console.log(req.url,'fetxg the patg');

//     if(req.url==='/post' && req.method=='POST'){
//         res.write(details)
        // res.write("<p>POST PAGE IS HERE </p><br/>") 
        // res.write("<h3>POST PAGE IS HERE</h3><br/>")
        // res.write("<table border='1px'><tr><th>NAME</th><th>Course</th></tr><tr><td>Sukhman</td><td>CSE</td></tr><tr><td>Sukhman</td><td>CSE</td></tr><tr><td>Sukhman</td><td>CSE</td></tr><tr><td>Sukhman</td><td>CSE</td></tr><tr><td>Sukhman</td><td>CSE</td></tr><tr><td>Sukhman</td><td>CSE</td></tr></table")
        // res.end();
//     }
//     else if(req.url==='/comment'&& req.method=='PUT'){
//         res.write("COMMENT PAGE IS HERE Read the comments")
//         res.end();
//     }
//     else if(req.url==='/read'&& req.method=='GET'){
//         res.write("READ PAGE IS HERE Read the comments")
//         res.end();
//     }
//     else{
//         res.write("404 page not found")
//         res.end();
//     }
// // res.write("Home Page")
// // res.end();
// })
// app.listen(4000,()=>{
//     try{  console.log('server is running.....')}
//     catch(err){
//         console.log('Error Found',err)
//     }
// })


// const express=require("express")
// const app=express();
// const BlogRouter=require("./Router/Blog")
// app.use("api/main",BlogRouter)
// app.get("/",(req,res)=>{
//     res.send("this is my Page")
// })
// app.get("/home",(req,res)=>{
//     res.send("this is my Page")
// })
// app.get("/about",(req,res)=>{
//     res.send("this is my Page")
// })
// app.get("/food",(req,res)=>{
//     res.send("this is my Page")
// })
// app.get("/bollywood",(req,res)=>{
//     res.send("this is my Page")
// })
// app.get("/comment",(req,res)=>{
//     res.send("this is my Page")
// })
// app.post("/post/DB",(req,res)=>{
//     res.send("ON the Page")
// })
// app.delete()
// app.listen(4000,()=>{
//        try{  console.log('server is running.....')}
//          catch(err){
//              console.log('Error Found',err)
//         }
//      })



const express=require("express");
const categoryRoute = require("./Routing/categories");
const auth = require("./middleware/auth");
const Port=4000;
const app=express()
const cors=require("cors")
app.use(cors({
        origin:"*"
}))
const middleware1=(req,res,next)=>{
        console.log('middleware1 will run first then only api will works')
        next();
}

const middleware2=(req,res,next)=>{
        console.log('middleware2 will run first then only api will works')
        next();
}

const middleware3=(req,res,next)=>{
        console.log('middleware3 will run first then only api will works')
        // const age=req.params.age;
        // const age=30;
        // if(age>18){
        //         next();
        // }
        // else{
        //         res.send('user not allowed due to age')
        // }
}
app.use(middleware1)
app.use(auth)
// app.use(middleware2)
// app.use(middleware3)
app.use("/api",categoryRoute);
app.get('/',(req,res)=>{
        console.log('Homme page')
     res.send('API is running fine')   
})

// app.get('/about',middleware2,(req,res)=>{
//         console.log('Homme page')
//      res.send('API is running fine')   
// })

// app.get('/about',middleware3,(req,res)=>{
//         console.log('Homme page')
//      res.send('API is running fine')   
// })

app.listen(4000,()=>{
        try{
                console.log(`Server is running fine-${Port}`)
        }
        catch(err){
                console.log(`Error occured in the code-${err}`)
        }
})



