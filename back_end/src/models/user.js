const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true,
        min: 8,
        max: 20
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    contactNumber: { type: String },
    profilePicture: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);