var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
var getRecentPosts = require('../middleware/postsmiddleware').getRecentPosts;
var db = require("../config/database");
/* GET home page. */
router.get('/', getRecentPosts, function(req, res, next) {
  res.render('index');
});

router.get('/login',(req, res, next) => {
  res.render("login");
});

router.get('/registration',(req, res, next) => {
  res.render("registration");
});

router.get('/Imagepost',(req, res, next) => {
  res.render("Imagepost");
});

router.get('/home',(req, res, next) => {
  res.render("home");
});

router.use('path', isLoggedIn);
router.get('/postimage',(req, res, next) => {
  res.render("postimage");
});

router.get('/post/:id', (req,res,next)=>{
 let baseSQL = "SELECT u.username, p.title, p.description, p.photopath, p.created \
 FROM users u \
 JOIN posts p \
 ON u.id=fk_userid \
 WHERE p.id=?;";

 let postId = req.params.id;
  db.query(baseSQL, [postId])
  .then(([results, fields]) =>{
    if(results && results.length){
      let post =results[0];
      res.render('imagepost', {currentPost:post});
    }else{
      req.flash('error', 'This is not the post you are looking for!');
      res.redirect('/');
    }
  })

});


module.exports = router;
