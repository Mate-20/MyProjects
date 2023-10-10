const db = require('../controllers/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = "RMSAKASH"

// Teacher Login function
exports.teacherlogin = (req, res) => {
    const { name, pass } = req.body
    const checkQuery = `SELECT * FROM Teacher WHERE Name = ?`
    db.query(checkQuery, [name], (err, result) => {
        if (err) {
            return res.status(500).send("Error fetching teacher")
        }
        const hashedPassword = result[0].Password
        const enteredPassword = pass
        // Matching the stored Hashed Password with Entered password
        const matchPass = bcrypt.compareSync(enteredPassword, hashedPassword)
        if (!matchPass) {
            const authenticationError = "Wrong Credentials";
            return res.render('teacher', { error: authenticationError });
        } else {

            // Generating and storing token in cookies
            const token = jwt.sign({ teachername: name, id: result[0].ID }, SECRET_KEY);
            res.cookie('token', token)
            res.redirect('/crudresult')
        }
    })
}

// Showing results after teacher login
exports.showResults = (req, res) => {
    const token = req.cookies.token
    const query = `SELECT * FROM Student`
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching results:', err);
            return res.status(500).send('Error fetching results');
        }      
        res.render('crudresult', { results: result, token : token});
    })
}

// Deleting student function
exports.deleteStudent = (req, res) => {
    const rollNo = req.params.Roll
    const query = `delete from Student where Roll = ?`

    db.query(query, [rollNo], (err, result) => {
        if (err) {
            console.error('Error deleting student:', err);
            return res.status(500).json({ error: 'Error deleting student' });
        } else {
            exports.showResults(req,res)
        }

    })
}


// Adding student function
exports.addStudent = (req, res) => {
    // Taking the token from cookies
    const token = req.cookies.token
    const { name, roll, dob, marks } = req.body;

    // Checking if roll number is already present or not    
    const checkQuery = `SELECT * FROM Student where Roll=?`
    db.query(checkQuery, [roll], (checkErr, checkResults) => {
        if (checkErr) {
            console.error('Error checking roll number:', checkErr);
            return res.status(500).send('Error checking roll number');
        }

        if (checkResults.length > 0) {
            // Roll number already exists, render error on addstudent.hbs
            return res.render('addstudent', { error: 'Roll number already exists' });
        }

        // Roll number and Marks should be int
        if (!Number.isInteger(Number(roll)) || !Number.isInteger(Number(marks))) {
            return res.render('addstudent', { error: 'Roll number and Marks must be integers' });
        }
        // If roll number is not present we will insert it.
        const insertQuery = `INSERT INTO Student (Roll,Name,Dob,Marks) VALUES (?, ?, ?, ?)`;
        db.query(insertQuery, [roll, name, dob, marks], (err, results) => {
            if (err) {
                console.error('Error adding student:', err);
                return res.status(500).send('Error adding student');
            }
            // Sending token to addstudent page
            res.render('addstudent', { success: 'Student added successfully',token:token });
        });
    });
};

// Will open the edit screen and will have the default values
exports.editStudent = (req, res) => {
    const token = req.cookies.token
    const query = `SELECT * FROM Student WHERE Roll = ?`
    db.query(query, [req.params.Roll], (err, result) => {
        if (err) {
            console.error('Error fetching results:', err);
            return res.status(500).send('Error fetching results');
        }
        res.render('editstudent', { student: result[0],token:token });
    })
}


// Updating the values of the student
exports.updateStudent = (req, res) => {
    const token = req.cookies.token
    const { marks, roll } = req.body;

    const query = `UPDATE Student SET Marks = ? WHERE Roll =?`
    db.query(query, [marks, roll], (err, result) => {
        if (err) {
            console.log("These are marks" + marks)
            console.log("These is roll" + roll)
            console.log(roll)
            console.error('Error fetching results:', err);
            return res.status(500).send('Error Editing Student');
        }
        res.render('editstudent', { success: "Student Edited Successfully", token:token });
    })
}

// Logging out the teacher
exports.logout=(req,res)=>{
    req.session.destroy(err => {
        if (err) {
            console.error('Error clearing session:', err);
            return res.status(500).send('Error logging out');
        }
        res.clearCookie('token'); // Clear the 'token' cookie
        res.redirect('/teacher');
    });
}