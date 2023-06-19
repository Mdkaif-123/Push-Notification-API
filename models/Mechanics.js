const mongoose = require('mongoose')

const MechanicsSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    fcmToken: {
        type : String,
        default : ""
    }
})

const Mechanics = mongoose.model('user', MechanicsSchema)
module.exports = Mechanics;