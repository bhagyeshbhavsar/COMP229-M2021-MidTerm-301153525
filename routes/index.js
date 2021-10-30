'use strict';
var bookModel = require('../models/book');
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');
var formidable = require('formidable');



/* GET home page. */
router.get('/', controlerIndex.home);

/* GET home page. */
router.get('/book/add', function(req, res, next) {
    res.render('book/add_edit', { title: 'add', book:[]});
  });

  /* GET home page. */
router.get('/book/list', function(req, res, next) {
    res.render('book/list', { title: 'List', books:[]});
});


/* POST insert page */
router.post('/insert', function (req, res) {
    var form = new formidable.IncomingForm();
    //Specify our image file directory
    form.parse(req, function (err, fields, files) {
        console.log('Parsed form.');
        
        const article = new bookModel({ Title: fields.Title, Description: fields.Description, Price: fields.Price, Author: fields.Author, Genre: fields.Genre });
        //Insert Employee into DB
        article.save(function (err) {
            console.log(err);
        });
        
        console.log('Received upload');
    });
    form.on('error', function (err) {
        console.log(err);
    });
    form.on('end', function (err, fields, files) {
        console.log('File successfuly uploaded');
        res.redirect('/book/list');
    });
});

/* GET update page */
router.get('/update/:id', function (req, res) {
    bookModel.findById(req.params.id, function (err, foundArticle) {
        if (err) console.log(err);
        //Render update page with specific employee
        res.render('update', { employee: foundArticle, user: req.user })
    })
});
/*   Name: Bhagyesh Bhavsar
     Student ID: 301153525
     Course: Web Application Development
     Midterm Exam */

module.exports = router;



