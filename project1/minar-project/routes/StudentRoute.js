const express = require("express") 
const { create, getAllStudents,  update, deleteStudent, openUpdatePage } = require("../controllers/StudentController")

const route = express.Router()

route.get("/new", (req,res)=> {
    res.render("newStudent.ejs")
})
route.post("/new", create)
route.get("/", getAllStudents)



route.get("/update/student/:id", openUpdatePage)
route.put("/update/student/:id", update)

route.delete("/delete/student/:id", deleteStudent)

module.exports = route;