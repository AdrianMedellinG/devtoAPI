const express = require("express")
const cors = require('cors')

const app = express()

//Routes
const routerPost = require("./routes/post.route")
const routerUser = require("./routes/user.route")
const routerAuth = require("./routes/auth.route")

//Middlewares del json
app.use(cors())
app.use(express.json())

//Middleware de routes (Posts)
//!app.use("/posts", routerPost)
//Middleware de routes (Users)
//!app.use("/users", routerUser)
//Middleware de routes (Auth)
//!app.use("/auth", routerAuth)




//General
app.get("/", (request, response)=>{
    response.json({message: "Bienvenido a nuestra API de DEVTO"})
})

module.exports = app