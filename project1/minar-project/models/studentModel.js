const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    rollNo: {
        type:Number,
        required: true
    },
    class: {
        type:Number,
        required: true
    },
    address: {
        type:String,
        required: true
    },

})

module.exports = mongoose.model("Student", studentSchema)