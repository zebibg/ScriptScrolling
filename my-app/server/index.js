const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const db = require('../db');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src')));


// const dontUseMe = () => throw new Error('implement controllers');
// const controller = require('./controller.js');
// console.log({controller});
// app.get('/attendees', controller.getAll);
// app.post('/attendees', controller.addOne);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});