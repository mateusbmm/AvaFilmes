const express = require('express');
const listController = require('./controller/listController')

const router = express.Router();

router.get('/filmes', listController.getAll);

module.exports = router;
