'use strict'

const express = require('express');
const router = express.Router({ mergeParams: true });

// Book Controller
const { BookController } = require('../controller/bookController');

// Get All Books
router.get('/', BookController.getAllBooks);

// Get By Id
router.get('/:id', BookController.getBookById);

// Post - create new
router.post('/add', BookController.addNewBook);

// Update
router.put('/:id/update', BookController.updateBook);

// Delete
router.delete('/:id/delete', BookController.deleteBook);

module.exports = {
    bookRouter: router
}

