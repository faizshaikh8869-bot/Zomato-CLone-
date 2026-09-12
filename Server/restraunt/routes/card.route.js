const express = require('express');
const multer = require('multer');
const cardImage =require('../Model/restraunt');

const route =express.Router();
const storage = multer.diskStorage({

});

const upload =multer({ storage:storage});

route.post('/upload', upload.single('cardImage') , async(req, res)=>{
    //Save image in db
})


module.exports =route