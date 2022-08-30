const express = require("express")
const { get } = require("mongoose")
const { createUser, 
        allUser,
        getUserId,
        } = require("../usecases/user.usecase")

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

router.get("/", async (request, response) => {
    try {
        const{query} = request
        const user = await allUser(query)
        response.json({
            sucess: true, 
            data: {
                user
            }
        })
    }catch(error) {
        response.status(400)
        response.json({
            sucess: false, 
            message: error.essage
        })
    }
})

router.get("/:id", async(request, response) => {
    try {
        const { params} = request
        const user = await getUserId(params.id)
        response.json({
            sucess: true, 
            data: {
                user
            }
        })
    }catch(error) {
        response.status(400)
        response.json({
            sucess: false, 
            message: error.message
        })
   }
})

module.exports = router
