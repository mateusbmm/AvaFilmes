const express = require('express');
const listController = require('./controller/listController')
const middleware = require('./middlewares/tasksMiddleware')

const router = express.Router();

router.get('/filmes', listController.getAll);
router.post('/filmes', listController.create);
router.delete('/filmes/:id', listController.deleteFilm);
router.put('/filmes/:id', middleware.validateBody, listController.updateFilm);




module.exports = router;
