const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const session = require('express-session');
const homeRoute = require('./routes/home')
const crudresultRoute = require('./routes/crudresult')
const nocache = require('nocache');
const hbs = require('hbs')
const path = require('path')
const cookieParser = require('cookie-parser');

// Add this middleware before your route handlers
app.use(nocache());

// Setting View engine and Path to partial files
const partialPath = path.join(__dirname,"/views/partials")
app.set('view engine','hbs')
hbs.registerPartials(partialPath)

// Configure express-session
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Use cookie-parser middleware
app.use(cookieParser());

// Parse incoming request bodies as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());      

// Define routes
app.use(crudresultRoute)
app.use(homeRoute)


// Listening in the entered PORT
app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})