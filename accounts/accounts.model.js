const mongoose = require('mongoose')


const scema = new mongoose.Schema(
    {
        fullName: {
            type: String, required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
        }
    }
)

module.exports = mongoose.model('Account',scema)