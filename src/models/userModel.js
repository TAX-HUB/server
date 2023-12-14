const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    profileImage: { type: String },
    username: { type: String, required: true },
    role: { type: String, enum: ["Admin", "User"], default: "User" },
    company: String
},{timestamps:true});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const genSalt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, genSalt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;