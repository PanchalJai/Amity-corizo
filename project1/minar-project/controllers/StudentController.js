const Student = require("../models/studentModel")

const create = async (req,res)=> {
    try {
        console.log("req.body",req.body);
        const newStudent = new Student(req.body);
    
        // console.log(newStudent);
        const savedData = await newStudent.save()
        
        res.redirect("http://localhost:5000/")
    } catch (error) {
        console.log(error)
    }
    
    
}

const getAllStudents = async (req,res)=> {
    try {
        const data = await Student.find();
        
        res.render("index.ejs", { data })
    } catch (error) {
        console.log(error)
    }
    
}



const openUpdatePage = async (req,res) => {
    let id = req.params.id;
    const newStudent = await Student.findById(id);
    res.render("edit.ejs" , {newStudent})
}

const update = async (req,res) => {
    try {
         const id = req.params.id;
    const newStudent = await Student.findById(id);

    if(!newStudent) {
        return res.render("edit.ejs", {message: "Student data not found"})
    }

    const updateStudent = await Student.findByIdAndUpdate(id, req.body, {
        new: true
    })
    res.redirect("/")
    } catch (error) {
        console.log(error)
    }
   
}


const deleteStudent = async (req,res) => {
    try {
        const id = req.params.id;
    const newStudent = await Student.findById(id);

    if(!newStudent) {
        return res.status(404).json({message: "User not found"});
    }
    const deletedStudent = await Student.findByIdAndDelete(id);
    console.log(deletedStudent)
    res.redirect("/")
    } catch (error) {
        console.log(error)
    }
    
}


module.exports = {create, getAllStudents,  update, openUpdatePage, deleteStudent}