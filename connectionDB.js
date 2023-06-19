const mongoose = require('mongoose')

const connectToDB = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/MessagingDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
                console.log('Connected to DB')
            })
            .catch((err) => {
                console.log('Connection Error : ' + err);
            })
    } catch (error) {
        console.log("Error : " + error);
    }
}

module.exports = connectToDB;

