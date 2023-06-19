const Mechanics = require('../models/Mechanics')

export const registerMechanics = (req, res) => {

    try {
        const { userName, fcmToken } = req.body

        const newMechanics = new Mechanics({
            userName: userName,
            fcmToken: fcmToken
        })

        newMechanics.save()
            .then(() => {
                res.status(200).json({
                    success: "true"
                })
                    .catch((err) => {
                        res.status(500).json({
                            error: err
                        })
                    })
            })
    } catch (error) {
        res.status(500).json({
            serverError: error
        })
    }
}

