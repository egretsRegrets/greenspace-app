const express = require('express');
const router = express.Router();
const greenspaceController = require('../controllers/greenspaceController');

router.post('/api/greenspaces', greenspaceController.testPost);
router.get('/api/greenspaces', greenspaceController.testGet);

module.exports = router;