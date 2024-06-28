import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,   
    }
}, { timestamps: true }); // Fixed typo here

const User = mongoose.model('User', userSchema); // Fixed typo here

export default User;
