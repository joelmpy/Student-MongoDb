const mongoose = require('mongoose')
const addModel = require('./model/userModel')
mongoose.connect('mongodb://localhost:27017/students');

addModel.insertMany([{
    "first_name": "",
    "last_name": "",
    "gender": ""
  }])