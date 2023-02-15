const express = require('express');
const router = express.Router();
const beaufCtrl = require('../controllers/beauf');

router.post('/', beaufCtrl.createBeauf);
router.get('/:id', beaufCtrl.getOneBeauf);
router.get('/', beaufCtrl.getAllBeauf);

module.exports = router;