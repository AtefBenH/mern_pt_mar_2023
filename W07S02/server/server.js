const express = require("express");

const app = express();

const PORT = 5000;
const DB = "fullstack_db"

// make sure these lines are above any app.get or app.post code blocks

// * Middleware : To make our server understand JSON
app.use(express.json(), express.urlencoded({ extended: true }) );

// ******************* CONNECT TO THE DATABASE ******************************
require("./config/mongoose.config")(DB)
// ! Go to models and create you Models ==>

// *******************REQUIRE ROUTES *************************
require("./routes/students.routes")(app)
// require("./routes/courses.routes")(app)
// ** TEST OUR ROUTES ====>

app.listen(PORT,()=>{console.log(`SERVER IS RUNNING AND LISTENING ON PORT ${PORT} 🚀🚀🚀`);})
