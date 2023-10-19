const BlogRouter=require("express").Router();
BlogRouter.get("/bollywood",(req,res)=>{
    res.send({
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      })
})
BlogRouter.get("/hollywood",(req,res)=>{
    res.send("This is bollywood page")
})
BlogRouter.get("/food",(req,res)=>{
    res.send("This is bollywood page")
})
module.exports = BlogRouter;