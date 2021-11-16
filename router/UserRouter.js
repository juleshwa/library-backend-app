'use strict'

const express = require('express');
const router = express.Router({ mergeParams: true });

// Get
router.get('/', function (req, res) {
    res.send('Ini halaman User');
});

// Get By Id or User Profile

router.get('/:id', function(req, res) {
    res.send(`ini adalah user dengan id: ${req.params.id}`)
})

// Post

// Update

// Delete

module.exports = {
    userRouter: router
}

