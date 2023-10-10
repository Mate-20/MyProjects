const express = require('express')
const router = express.Router()
const resultList = require('../controllers/crudresult');

// Get Request for Deleting Student
router.get('/crudresult/:Roll', resultList.deleteStudent);

// Post request for Teacher login
router.post('/crudresult', resultList.teacherlogin);

// Get request for Results List
router.get('/crudresult',resultList.showResults);

// Get Request for Add student window (Will not open unless token is present)
router.get('/addstudent',(req,res)=>{
    const token = req.cookies.token
    res.render('addstudent',{token:token})
})

// Post request to Add student
router.post('/addstudent',resultList.addStudent)

// Get request to Open Edit window (Will not open unless token is present)
router.get('/editstudent/:Roll',resultList.editStudent)

// Post request to Update the Student
router.post('/editstudent/:Roll',resultList.updateStudent)

// Get request for Teacher logout
router.get('/teacher-logout',resultList.logout)

module.exports = router