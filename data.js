const mongoose = require('mongoose')
const addModel = require('./model/userModel')
mongoose.connect('mongodb://localhost:27017/students');

addModel.insertMany([{
    "first_name": "Humfried",
    "last_name": "Daly",
    "gender": "Male"
  }, {
    "first_name": "Joyce",
    "last_name": "Ivanovic",
    "gender": "Female"
  }, {
    "first_name": "Mattie",
    "last_name": "D'Ambrogio",
    "gender": "Male"
  }, {
    "first_name": "Ailey",
    "last_name": "Leyton",
    "gender": "Female"
  }, {
    "first_name": "Jessee",
    "last_name": "Mellings",
    "gender": "Male"
}])