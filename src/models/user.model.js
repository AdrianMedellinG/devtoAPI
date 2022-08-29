<<<<<<< HEAD
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }

})

=======
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }

})

>>>>>>> 1e664c6c1a616e7fc5b5d263ed1f1ba2ae0e60bd
module.exports = mongoose.model("users", userSchema)