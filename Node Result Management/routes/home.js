const express = require('express')
const router = express.Router()
const homecontrol = require('../controllers/homecontroller')

// Get request for Home page
router.get('/',(req,res)=>{
    res.render('home')
})

// Get request to open Student login window
router.get('/student',(req,res)=>{
    res.render('student')
})

// Post request for checking a result
router.post('/result',homecontrol.checkResult)

// Get reuest for Student logout
router.get('/student-logout',homecontrol.logout)

// Get request for Teacher login window
router.get('/teacher',(req,res)=>{
    res.render('teacher')
})

// Get request for Teacher registration Window
router.get('/signup',(req,res)=>{
    res.render('registerteacher')
})

// Post request for Registring Teacher
router.post('/register',homecontrol.register)

module.exports = router