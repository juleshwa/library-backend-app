'use strict'

const express = require('express');
const router = express.Router();

// BookRouter
const { bookRouter } = require('./BookRouter');

// UserRouter
const { userRouter } = require('./UserRouter');

// Controller
const { Controller } = require('../controller/Controller');

// Homepage
router.get('/', Controller.homepage);

// Register
// router.post('/register', Controller.register);

// Login
// router.post('/login', Controller.login );

// Books Routing
router.use('/books', bookRouter);

// User Routing
router.use('/users', userRouter);

module.exports = { router };