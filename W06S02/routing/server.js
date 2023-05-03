const express = require("express");

const app = express();

const PORT = 5000;



// make sure these lines are above any app.get or app.post code blocks
// * Middleware : To make our server understand JSON
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// *************************************************
require("./routes/routes")(app)

app.listen(PORT,()=>{console.log(`SERVER IS RUNNING AND LISTENING ON PORT ${PORT} 🚀`);})

