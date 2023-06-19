// For sending the message FCM node is imported
const FCM = require('fcm-node');
const serverKey = process.env.SERVER_KEY; //put your server key here
const fcm = new FCM(serverKey);

// For passing message instance {messaging}
// const messaging = require('./firebase')
const { getMessaging, getToken } = require("firebase/messaging")

// Users and Mechanics MOdels
const Mechanics = require('../models/Mechanics')

const sendMessageToMechanics = async () => {

    try {
        const foundMechanics = await Mechanics.find({})

        if (foundMechanics) {

            foundMechanics.forEach(mechanics => {
                let message = {
                    to: mechanics.fcmToken,

                    notification: {
                        title: 'Congratulations 🎉',
                        body: 'Everything is working fine !'
                    },
                };

                fcm.send(message, function (err, response) {
                    if (err) {
                        console.log("Something has gone wrong!" + err);
                    } else {
                        console.log("Successfully sent with response: ", response);
                    }
                });
            });
        } else{
            res.status(404).json({
                error : "No Mechanics found !"
            })
        }
    } catch (error) {
        res.status(500).json({
            serverError : error
        })
    }
}   



module.exports = sendMessageToMechanics
