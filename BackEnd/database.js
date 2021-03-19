const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.getConnection( (err) => {
    if (err) {
        console.log('mysql failed to connect');
        return;
    }
    console.log('mysql connected!');
});
