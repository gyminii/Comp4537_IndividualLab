
const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./BackEnd/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

app.set('port', process.env.PORT || 3333);

app.use(express.static('FrontEnd')); 

app.get('/', (req, res) => {
    res.sendFile('/FrontEnd/index.html');
}); 
app.listen(app.get('port'), () => {
    console.log("Listening on port " + app.get('port'));
});