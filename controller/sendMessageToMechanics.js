// For sending the message FCM node is imported
const FCM = require('fcm-node');
const serverKey = 'BAkv5UgyTFddW3mjXkmQYMSE7ldSQb9iX-HVCoGyw7n4NlgyjzEdigT_yHxZsGGsibhXDUUVtGxZf54krLhgGlY'; //put your server key here
const fcm = new FCM(serverKey);

// For passing message instance {messaging}
const messaging = require('./firebase')
const { getMessaging, getToken } = require("firebase/messaging")

// Users and Mechanics MOdels
const User = require('../models/User')
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
                        console.log("Something has gone wrong!");
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

// const getTokenForUser = async () => {

//     try {
//         const messaging = getMessaging();
//         const tokenReceived = await getToken(messaging, { vapidKey: serverKey });

//         if (tokenReceived) {
//             console.log(tokenReceived);
//             await sendMessage(tokenReceived)
//             return tokenReceived
//         } return false
//     } catch (error) {
//         return error
//     }
// }

// const request = async (req, res) => {

//     const { userName } = req.body;
//     const fcmToken = await getTokenForUser()
//     console.log(fcmToken);

//     if (fcmToken) {
//         const newUser = User({
//             userName: userName,
//             fcmToken: fcmToken,
//         })

//         newUser.save()
//             .then(() => {
//                 res.status(200).json({
//                     success: "Request Submitted"
//                 })
//             })
//             .catch((err) => {
//                 res.status(500).json({
//                     error: err
//                 })
//             })
//     } else {
//         res.status(500).json({
//             error: "Something went wrong !"
//         })
//     }
// }

module.exports = sendMessageToMechanics
