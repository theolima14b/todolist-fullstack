const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
require('dotenv').config();


app.get('/', (_req, res) => {
  res.send('Hello world!');
})


app.listen(process.env.PORT, () => {
  console.log(`Runing on port ${process.env.PORT}`)
})