const express = require("express")
const { createPost } = require("../usecases/post.usecase")

const router = express.Router()


router.post("/", async (request, response) => {
  const { body } = request
  try{
    const post = await createPost(body)
    response.status(201)
    response.json({
      success: true,
      data: {
        post
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