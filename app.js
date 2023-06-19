// Enabling the .env file to be used
require('dotenv').config()

// To overcome error - navigator not defined 
require('browser-env')();

// Creating app with express
const express = require('express')
const app = express()

// Importing and connecting to DB
const connectToDB = require('./connectionDB')
connectToDB()

// Defining PORT 
const PORT = 3000 || process.env.PORT

// Importing user routes
const userRoutes = require('./routes/users')
const mechanicsRoutes = require('./routes/mechanics')

// Default route for testing purpose
app.get('/' , (req,res)=>{res.send("Working")})

// App to use json data
app.use(express.json())

// Route for Users
app.use('/user', userRoutes)

// Route for Mechanics
app.use('/mechanics', mechanicsRoutes)


app.listen(PORT, () =>{
    console.log(`Port is listening on http://localhost:${PORT}`);
})
