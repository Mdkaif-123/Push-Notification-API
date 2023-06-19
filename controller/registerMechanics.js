
const Mechanics = require('../models/Mechanics')

const registerMechanics = async (req, res) => {
    try {

        const {userName,fcmToken} = req.body
        
        const newMechanics = new Mechanics({
            userName: userName,
            fcmToken: fcmToken
        })

        newMechanics.save()
            .then(() => {
                res.status(200).json({
                    success: "true"
                })
            })
    }catch (error) {
        res.status(500).json({
            ServerError : error
        })
    }
}

module.exports = registerMechanics;