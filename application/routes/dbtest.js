const express = require('express');
const router = express.Router();

const db = require('../config/database');


router.get('/getAllUsers', (req, res, next)=>{
   db.query('SELECT * from users;', (err, results, fields) => {
    console.log(results);
    res.send(results);
   })
});

router.get('/getAllPosts', (req, res, next)=>{
   db.query('SELECT * from posts;', (err, results, fields) => {
    console.log(results);
    res.send(results);
   })
});
module.exports =router; 