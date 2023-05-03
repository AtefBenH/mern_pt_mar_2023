const StudentController = require("../controllers/studentsController")

// 

module.exports = (app)=>{
    // Get All Route
    app.get("/api/students",StudentController.findAll)
    app.post("/api/students", StudentController.create)
    app.get("/api/students/:id", StudentController.findOne)
    app.delete("/api/students/:id", StudentController.delete) 
    app.put("/api/students/:id", StudentController.update)
}

// ! Go to Server.js file and require the routes
