const express = require("express")
const auth = require("../middlewares/auth.middleware")
const { createPost, 
    allPost, 
    getPostId, 
    updatePost, 
    deletePost 
    } = require("../usecases/post.usecase")


//Endpoints
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

router.get("/", async (request, response) => {
    try {
        const{query} = request
        const post = await allPost(query)
        response.json({
            sucess: true, 
            data: {
                post
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
        const post = await getPostId(params.id)
        response.json({
            sucess: true, 
            data: {
                post
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

router.patch("/:id", auth, async(request, response) => {
    try {
        const { params, body } = request
        const post = await updatePost (params.id, body)
        
        response.json({
            sucess: true, 
            data: {
                post
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

router.delete("/:id", auth, async(request, response) => {
    try {
        const { params} = request
        const post = await deletePost(params.id)
        response.json({
            sucess: true, 

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