const mongoose = require('mongoose')

const UserSchema =  new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User