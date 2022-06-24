const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db');
const {addOne, getAll} = require('./controller.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

const PORT = 3001;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
console.log(addOne);
app.get('/scripts', getAll);
app.post('/scripts', addOne);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});