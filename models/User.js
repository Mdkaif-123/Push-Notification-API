const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    fcmToken: {
        type : String,
        default : ""
    }
})
const User = mongoose.model('user', UserSchema)
module.exports = User;