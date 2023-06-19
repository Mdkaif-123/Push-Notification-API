const mongoose = require('mongoose')

const MechanicsSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    fcmToken: {
        type : String,
        default : ""
    }
})

const Mechanics = mongoose.model('mechanics', MechanicsSchema)
module.exports = Mechanics;