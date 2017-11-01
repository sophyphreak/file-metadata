'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '../public');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(publicPath));

app.get('/', function (req, res) {
  res.sendFile(publicPath + '/index.html');
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
