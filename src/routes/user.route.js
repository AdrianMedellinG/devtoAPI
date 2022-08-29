<<<<<<< HEAD
const express = require("express")
const { createUser } = require("../usecases/user.usecase")

const router = express.Router()


router.post("/", async (request, response) => {
  const { body } = request
  try{
    const user = await createUser(body)
    response.status(201)
    response.json({
      success: true,
      data: {
        user
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
=======
const express = require("express")
const { get } = require("mongoose")
const { createUser } = require("../usecases/user.usecase")

const router = express.Router()


router.post("/", async (request, response) => {
  const { body } = request
  try{
    const user = await createUser(body)
    response.status(201)
    response.json({
      success: true,
      data: {
        user
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})


module.exports = router

>>>>>>> 1e664c6c1a616e7fc5b5d263ed1f1ba2ae0e60bd
