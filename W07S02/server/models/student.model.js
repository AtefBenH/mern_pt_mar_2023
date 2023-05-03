const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        minlength:3
    },
    age :{
        type: Number,
        required:true,
        min:10,
        max:150
    },
    isGraduated:{
        type:Boolean,
        default:false
    },
    hobbies:{
        type:Array,
        required:true,
        minlength:1
    }
},{timestamps:true} )

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student;
// ! Go to The Controllers and Create the Controller for this Models