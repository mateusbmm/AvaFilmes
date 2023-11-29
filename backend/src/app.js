const express = require('express');
const router = require('./router')

app = express();

app.use(express.json());//permite a api trabalhar com dados json
app.use(router);

module.exports = app;