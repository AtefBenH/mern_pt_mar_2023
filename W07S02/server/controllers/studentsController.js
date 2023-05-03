//  == CRUD ==

const Student  = require("../models/student.model")

// - CREATE ----
module.exports.create = (req,res)=>{
    console.log(req.body);
    Student.create(req.body)
    .then(newStudent=>{
        console.log("SERVER SUCCESS (CREATE)✅✅");
        res.json(newStudent)
    })
    .catch(err=>{
        console.log("SERVER ERROR (CREATE) ❌❌❌");
        res.json(err)
    })
}
// ! Go and add the route (Create) to test this query==>


// - READ ALL ----
module.exports.findAll = (req,res)=>{
    Student.find().then(allStudents=>{
        console.log("All Students Found : ", allStudents);
        res.json(allStudents)
    }).catch(err=>{
        console.log("Error", err);
        res.json(err)
    })
}
// ! Go and add the route (Read All) to test this query==>


// - READ ONE ----
module.exports.findOne = (req,res)=>{
    //Note Student.findOne({_id:req.params.id})
    Student.findById(req.params.id).then(oneStudent=>{
        console.log("Student Found : ", oneStudent);
        res.json(oneStudent)
    }).catch(err=>{
        console.log("Error", err);
        res.json(err)
    })
}
// ! Go and add the route (Read One) to test this query==>


// - UPDATE ----
module.exports.update = (req,res)=>{
    Student.findByIdAndUpdate(req.params.id, req.body,{ new: true, runValidators: true })
    .then(updatedStudent=>{
        console.log("SERVER SUCCESS (UPDATE)✅✅");
        res.json(updatedStudent)
    })
    .catch(err=>{
        console.log("SERVER ERROR (UPDATE) ❌❌❌");
        res.json(err)
    })
}
// ! Go and add the route (Read One) to test this query==>


// - DELETE ----
module.exports.delete = (req,res)=>{
    console.log(req.body);
    Student.findByIdAndDelete(req.params.id)
    .then(result=>{
        console.log("SERVER SUCCESS (DELETE)✅✅");
        res.json(result)
    })
    .catch(err=>{
        console.log("SERVER ERROR (DELETE) ❌❌❌");
        res.json(err)
    })
}
// ! Go and add the route (Delete) to test this query==>
