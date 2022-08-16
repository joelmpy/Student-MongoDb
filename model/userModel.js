const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id : Number,
    first_name : String,
    last_name : String,
    gender : String,
})

const userModel = mongoose.model('student', userSchema)
const addModel = userModel

module.exports = addModel