const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    profileImage:String,
    company:String
});

const User = mongoose.model('User',userSchema);
module.exports = User ;