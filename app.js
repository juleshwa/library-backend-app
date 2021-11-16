'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Routing
const { router } = require('./router/router');

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

// Listen to PORT
app.listen(PORT, () => console.log(`Server Connected on ${PORT}`));

