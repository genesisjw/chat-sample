const express = require('express');
const router = express.Router();

const botCtrl = require('../controllers/bot.controller');
const userCtrl = require('../controllers/user.controller');

router.get('/', botCtrl.list);

router.post('/', botCtrl.create);

router.put('/', botCtrl.update);

router.delete('/', botCtrl.delete);

router.post('/chat', userCtrl.send);

module.exports = router;
