'use strict'

const express = require('express');
const router = express.Router({ mergeParams: true });
const { UserController } = require('../controller/userController');

// Get
router.get('/', UserController.getAllUsers);

// Get By Id or User Profile

router.get('/:id', function (req, res) {
    res.send(`ini adalah user dengan id: ${req.params.id}`)
})

// Post

// Update

// Delete

module.exports = {
    userRouter: router
}

