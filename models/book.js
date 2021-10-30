
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

/*   Name: Bhagyesh Bhavsar
     Student ID: 301153525
     Course: Web Application Development
     Midterm Exam */
module.exports = mongoose.model('Book', bookModel);
