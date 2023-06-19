const { initializeApp } = require("firebase/app")
const { getMessaging } = require("firebase/messaging")

const firebaseConfig = {
    apiKey: "AIzaSyAH0gfJkEJaHzykMcvCKiChvMhNutvodes",
    authDomain: "md-kaif-ansari.firebaseapp.com",
    projectId: "md-kaif-ansari",
    storageBucket: "md-kaif-ansari.appspot.com",
    messagingSenderId: "366553375168",
    appId: "1:366553375168:web:0c83bffec218ed25d0a825",
    measurementId: "G-GGN4ZSZR4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

module.exports = messaging