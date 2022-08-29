<<<<<<< HEAD
const Post = require("../models/post.model")
const createError = require('http-errors')
const jwt = require("../lib/jwt.lib")

const createPost = async (data) => {
  const post = Post.create({...data })
  return post
}

module.exports = {
    createPost
=======
const Post = require("../models/post.model")
const createError = require('http-errors')
const jwt = require("../lib/jwt.lib")

const createPost = async (data) => {
  const post = Post.create({...data })
  return post
}

// All Get/Posts
const allPost = (filters) => {
    const post = Post.find(filters)
    return post
}
    
// Get/Post/:Id
const getPostId = (id) => {
    const post = Post.findById(id)
    return post
}

//Actualizar
const updatePost = (id,postData) => {

    const post = Post.findByIdAndUpdate(id, postData, {returnDocument: "after"})
    return post
}
// Delete
const  deletePost = (id) => {
    const post = Post.findByIdAndDelete(id)
    return post
}
module.exports = {
    createPost,
    allPost,
    getPostId,
    updatePost,
    deletePost
>>>>>>> 1e664c6c1a616e7fc5b5d263ed1f1ba2ae0e60bd
}