//1  Bring Express
const express = require("express");
// 2 Invoke express and store the return into app
const app = express();
// 3 declare the PORT => Global variable
const PORT = 1337; 

// -Routes
// ! /api  = server routes
app.get("/api",(requestObject,responseObject)=>{
    responseObject.send("<h1>Hello From /api 👋👋👋</h1>")
})
app.get("/api/hello",(requestObject,responseObject)=>{
    responseObject.json({message:"Hello from The server", status:"ok",code:200})
})

// 4 Start the server 
app.listen(PORT,()=>{console.log(`SERVER IS RUNNING AND LISTING ON PORT ${PORT} 🚀🚀🚀`);})