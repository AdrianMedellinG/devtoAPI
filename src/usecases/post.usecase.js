const Post = require("../models/post.model")
const createError = require('http-errors')
const jwt = require("../lib/jwt.lib")

const createPost = async (data) => {
  const post = Post.create({...data })
  return post
}

module.exports = {
    createPost
}