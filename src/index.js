const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3000;
const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(morgan('dev'));