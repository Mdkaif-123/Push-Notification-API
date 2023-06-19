const User = require('../models/User')


const request = async (req, res) => {

    try {
        const { userName, fcmToken } = req.body;

        const newUser = User({
            userName: userName,
            fcmToken: fcmToken,
        })

        newUser.save()
            .then(() => {
                res.status(200).json({
                    success: "Request Submitted"
                })
            })
            .catch((err) => {
                res.status(500).json({
                    error: err
                })
            })
    } catch (error) {
        res.status(500).json({
            serverError: error
        })
    }
}

module.exports = request