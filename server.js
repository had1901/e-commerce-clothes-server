const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()
const PORT = process.env.POST || 5000


app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma',
    ],
}))
app.use(cookieParser())
app.use(express.json())

const connect = async () => {
    await mongoose.connect('mongodb+srv://ductoclx01:1912001d@cluster0.vcyzw.mongodb.net/')
        .then(() => console.log('Connect to mongooseDB'))
        .catch(err => console.error(err))

    app.listen(PORT, () => console.log('Connect to server'))
}
connect()

