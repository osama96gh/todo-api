const { default: mongoose } = require("mongoose");


const scema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    title:{
        type: String,
        required: true,

    },
    isCheched: Boolean,
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})


module.exports = mongoose.model('Todo', scema)