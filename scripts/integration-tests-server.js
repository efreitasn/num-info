const express = require('express');
const app = express();
const path = require('path');

app.use(
  '/num-info',
  express.static(
    path.resolve(__dirname, '..', 'build')
  )
);

app.listen(3000);