// DATABASE File.

const dotenv = require('dotenv')
const mysql = require('mysql2')
dotenv.config({ path: './db.env' })

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((err) => {
    if (err) {
        console.error('Error closing the connection:', err);

    } else {
        console.log('Connection');
    }

});
module.exports = db;