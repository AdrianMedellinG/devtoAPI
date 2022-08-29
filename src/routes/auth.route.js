const express = require("express")
const router = express.Router()
const {login} = require ("../usecases/user.usecase")


router.post("/login", async (request, response) => {
    const { body } = request
    try{
      const token = await login (body.email, body.password)
      response.status(201)
      response.json({
        success: true,
        data: {
          token
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