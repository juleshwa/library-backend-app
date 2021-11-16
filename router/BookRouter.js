'use strict'

const express = require('express');
const router = express.Router({ mergeParams: true });

// Book Controller
const { BookController } = require('../controller/bookController');

// Get
router.get('/', BookController.getAllBooks);

// Get By Id

router.get('/:id', function (req, res) {
    res.send(`ini adalah user dengan id: ${req.params.id}`)
})

// Post

// Update

// Delete

module.exports = {
    bookRouter: router
}

