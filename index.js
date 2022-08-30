
require('dotenv').config()
const app = require("./src/server")
const mongoose = require('mongoose')

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
} = process.env
const port = process.env || 3000;
const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
//Conectando a base de datos
mongoose.connect(URL)
.then(()=>{
    console.log("Conectado a la base de datos de mongo")
    //Levantando el server
    app.listen(port, () =>{
        console.log("Server Listening on port:", port)
    })
})
.catch((error)=>{
    console.log("Error",error)
})