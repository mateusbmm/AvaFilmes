const express = require('express');
const router = require('./router');
var cors = require('cors')


app = express();

app.use(cors())
app.use(express.json());//permite a api trabalhar com dados json
app.use(router);

module.exports = app;