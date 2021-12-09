'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Cors
let originOptionCors = {
    origin: `http://localhost:${PORT}`
};

app.use(cors(originOptionCors));

// Routing
const { router } = require('./router/router');

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

// Listen to PORT
app.listen(PORT, () => console.log(`Server Connected on ${PORT}`));

