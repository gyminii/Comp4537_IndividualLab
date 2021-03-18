const express = require('express');
const app = express();
const {init} = require('./BackEnd/database')

app.use(express.static('FrontEnd')); 

init()();

app.get('/', (req, res) => {
    res.sendFile('/FrontEnd/index.html');
}); 
app.listen(3333, () => {
    console.log("Listening on port 3333!");
});
