const express = require('express');
const router = express.Router();
const gaeCtrl = require('../controllers/gae');

router.post('/', gaeCtrl.createGae);
router.get('/:id', gaeCtrl.getOneGae);
router.get('/', gaeCtrl.getAllGae);

module.exports = router;