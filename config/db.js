const mysql = require('mysql');
const DBConfig = require('../config/db.config');

// Create Connection to Database

const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB
});

// Open the MySQL connection

connectDB.connect(err => {
    if (err) throw err;
    console.log('Connected success to database');
})

module.exports = connectDB;