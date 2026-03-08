const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const route  = require("./routes/StudentRoute")
const methodOverride = require('method-override')
const path = require("path")

dotenv.config()
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.set("view engine", "ejs")
app.use(methodOverride('_method'))

const PORT = process.env.PORT || 5000; 
const MONGO_URL = process.env.MONGO_URL

// app.get("/", (req,res) => {
//     res.send("Hi, i am root.")
// })

app.use("/", route)

app.listen(PORT, ()=> {
    console.log(`Server is listning on the port ${PORT}`)
    mongoose.connect(MONGO_URL).then(()=> {
        console.log("DB connected.")
    }).catch((err)=> {
        console.log(err);
    })
})