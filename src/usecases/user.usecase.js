const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const createError = require('http-errors')
const jwt = require("../lib/jwt.lib")


// Crear un usuario
const createUser = async (userData) => {
  const hashPassword = await bcrypt.hash(userData.password, 10)
  const user = User.create({...userData, password:hashPassword})
  return user
}

const login = async (email, textPlainPassword)=>{
  const user = await User.findOne({email})
  if(!user) throw createError(401, 'Wrong Email.')
  
  const isValidPassword = await bcrypt.compare(textPlainPassword, user.password) 
    if(!isValidPassword) throw createError(401, 'Wrong Password.')

    const token = jwt.sign({ id: user._id })
  return token
}

// All Get/Users
const allUser = (filters) => {
    const user = User.find(filters)
    return user
}


// Get/User/:Id
const getUserId = (id) => {
    const user = User.findById(id)
    return user
}
module.exports = {
  createUser,
  allUser,
  getUserId,
  login
}