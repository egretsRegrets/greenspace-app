const express = require('express');
const router = express.Router();
const greenspaceController = require('../controllers/greenspaceController');

router.get('/api/greenspaces', greenspaceController.testGet);

router.post('/api/greenspaces', greenspaceController.testPost);

module.exports = router;