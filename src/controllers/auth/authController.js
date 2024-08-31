const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')


const register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({
            email, 
            username, 
            password: hashPassword
        })
        console.log(newUser)
        return res.status(201).json({
            success: true,
            message: 'Register successfully'
        })
    } catch(e) {
        console.log(e)
        return res.status(500).json({
            success: false,
            message: 'Error access DB'
        })
    }
}

const login = async (req, res) => {
    const { username, email, password } = req.body
    try {

    } catch(e) {
        console.log(e)
        return res.status(500).json({
            success: false,
            message: 'Error access DB'
        })
    }
}

modules.exports = {
    register
}