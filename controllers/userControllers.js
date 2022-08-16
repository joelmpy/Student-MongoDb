const express = require('express');
const router = express.Router();
const usersModels = require('../model/userModel')

router.get('/students', function(req, res, next) {
    usersModels.find()
    .exec()
    .then(function (reponse) {
        res.json(reponse)
    })
})

router.post('/', function(req, res){
    const doc = new usersModels(req.body)
    doc.save().then(response => response);
    res.send("succes")
})
   

module.exports = router