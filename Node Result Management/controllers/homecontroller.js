const db = require('../controllers/db');

// Checking result after Student Login
exports.checkResult = (req, res) => {
    const { name, roll } = req.body;
    const query = `SELECT * FROM Student WHERE Roll = ? AND Name = ?`;

    db.query(query, [roll, name], (err, result) => {
        if (err) {
            console.error('Error checking Marks:', checkErr);
            return res.status(500).send('Error checking Marks');
        }
        if (result.length == 0) {
            return res.render('student', { error: "Wrong Credentials" })
        }
        res.render('result', { results: result[0] })
    })
}

// Logging out the student
exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error clearing session:', err);
            return res.status(500).send('Error logging out');
        }
        // Redirect to the student login page or wherever appropriate
        res.redirect('/student'); // Adjust the route as needed
    });
}

// Resgitration for New Teacher
exports.register = (req, res) => {

    // Using bcrypt hashing to store passwords as Hash and Not directly
    const bcrypt = require('bcrypt');
    const {name,pass,id} = req.body
    const plainPassword = pass; 
    const saltRounds = 10;
    bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
        } else {
            const query = `INSERT INTO Teacher (ID, Name, Password) VALUES(?,?,?)`
            db.query(query, [id,name,hash], (err, result) => {
                if (err) {
                    console.error('Error adding teacher:', err);
                    return res.status(500).send('Error adding student');
                }
                res.render('registerteacher',{success : "Teacher Registered"})
            })
        }
    });
}