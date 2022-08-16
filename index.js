const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');
const routeur = require('./controllers/userControllers')

const port = process.env.port || 8009
const app = express();
mongoose.connect('mongodb://localhost:27017/students');


app.use(cors());
app.use(express.json())
app.use('/', routeur);



app.listen(port, err => {
    if(err){
        return console.log('Error', err)
    }  
     console.log(`Listen on port ${port}`)
})