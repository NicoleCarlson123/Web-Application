var express = require('express');
var router = express.Router();
var db = require ("../config/database");
const {successPrint, errorPrint} = require("../helpers/debug/debugprinters");
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
var PostError =require('../helpers/error/PostError');
const e = require('express');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images/uploads");
    },
    filename: function(req, file, cb){
        let filExt = file.mimetype.split('/')[1];
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, `${randomName}.${filExt}`);
    }
});

var uploader = multer({storage: storage});


router.post('/createPost', uploader.single("uploadImage"), (req, res, next)=>{
    let fileUploaded = req.file.path;
    let fileAsThumbnail = `thumbnail -${req.file.filename}`;
    let destinationOfThumbnail = req.file.destination + "/" + fileAsThumbnail;
    let title = req.body.title;
    let description = req.body.description;
    let fk_userID = req.session.userID;

    //server validation on your own

    sharp(fileUploaded)
    .resize(200)
    .toFile(destinationOfThumbnail)
    .let(()=>{
        let baseSQL = 'INSERT INTO posts (tite, description, photopath, thumbnail, created, fk_userid) VALUE(?,?,?,?, now(),?);;';
        return db.execute(baseSQL, [title, description, fileUploaded, destinationOfThumbnail, fk_userID]);
    })
    .then(([results, fields])=>{
        if(results && results.affectedRows){
            req.flash('success',"Your post was created successfully!");
            res.redirect('/');

        }else{
            throw new PostError('POST could not be created!!', '/postImage',200);
        }
    })
    .catch((err)=>{
        if(err instanceof PostError){
            errorPrint(err.getMessage());
            req.flash('error', err.getMessage());
            req.status(err.getStatus());
            res.redirect(err.getRedirectURl());
        }else{
            next(err);
        }

    })
});

router.get('/search', (req, res, next) =>{
    let searchTerm = req.query.search;
    if(!searchTerm){
        res.send({
            resultsStatus: "info",
            message:"No search term given",
            results: []
        });
        
    }else{
        let baseSQL = "SELECT id, title, description, thumbnail, concat_ws(' ', title, description) AS haystack \
        FROM posts \
        HAVING haystack like ?;";
        let sqlReadySearchTerm = "%" +searchTerm+"%";
        db.execute(baseSQL, [sqlReadySearchTerm])
        .then(([results, fields]) => {
            if(results && results.length){
                res.send({
                    resultsStatus: "info",
                    message: `${results.length} results found`,
                    results: results
                });

            }else{
                db.query('select, id, title, description, thumbnail, created from posts ORDER BY created LIMIT 8',[])
                .then(([results, fields])=> {
                    res.send({
                        resultsStatus: "info",
                        message: "No results were found for your search but here are 8 most recent posts",
                        results : results
                    });
                })
            }
        })
        .catch((err) => next(err))
    }
});
module.exports =router;