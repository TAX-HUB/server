const express = require('express');
const User = require('../models/userModel')
const joi = require('joi')
const bcrypt = require('bcrypt')
const cookieParser = require ('cookie-parser')
const asyncHandler = require('express-async-handler')
const router = express.Router();
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean()

    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
      }
    
      res.json(users)
    


} )
const createNewUser = asyncHandler(async (req, res) => {
    console.log(req.body)
  
    const { username, password, email } = req.body
  
    if (!username || !password) {
      return res.status(400).json({ message: 'The user is required' })
    }
    const duplicate = await User.findOne({ username }).collation({ local: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
      return res.status(409).json({ message: 'Duplicate username' })
    }
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds
 
    const userObject = (schema = joi.object({
        username:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().required(),
       profileImage :joi.string().required(),






    }))
  
    const user = await User.create(userObject)
  
    if (user) {
      res.status(201).json({ message: `New user ${username} created` })
    } else {
      res.status(400).json({ message: 'Invalid user data received' })
    }
  })
  
  const updateUser = asyncHandler(async (req, res) => {
    const { jd, username,   password } = req.body
  
    if (!id || !username || typeof active !== 'boolean') {
      return res.status(400).json({ message: 'All users is required' })
    }
  
    const user = await User.findById(id).exec()
  
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }
    const duplicate = await User.findOne({ username }).collation({ local: 'en', strength: 2 }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== id) {
      return res.status(409).json({ message: 'Duplicate username' })
    }
  
    user.username = username
    user.roles = roles
    user.active = active
  
    if (password) {
      user.password = await bcrypt.hash(password, 10)
      res.cookie('userToken', 'yourGeneratedToken',{httpOnly:true})
      res.send('User registered successfully')
   
    }
    const{error} =User.schema.validate(req.body)
    if(error){
        return res.status(400).json({error:error.details[0].message})
    }
  
    const updatedUser = await user.save()
  
    res.json({ message: `${updatedUser.username} updated` })
  })
  
  const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body
  
    if (!id) {
      return res.status(400).json({ message: 'User ID Required' })
    }
  
  
    const user = await User.findById(id).exec()
  
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }
  
    const result = await user.deleteOne()
  
    const reply = `Username ${result.username} with ID ${result._id} deleted`
  
    res.json(reply)
  })
  
  module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
  }
  
  
  




  

