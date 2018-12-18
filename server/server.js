'use strict';

const _ = require('lodash');
const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '../public');
const upload = multer({
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(publicPath + '/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const metadata = _.pick(req.file, ['size', 'originalname', 'mimetype']);
  res.send({
    name: metadata.originalname,
    type: metadata.mimetype,
    size: metadata.size
  });
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
