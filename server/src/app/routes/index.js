const express = require('express');
const router = express.Router();
const greenspaceController = require('../controllers/greenspaceController');
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/api/greenspaces', catchErrors(greenspaceController.testGet));

router.post('/api/greenspaces', catchErrors(greenspaceController.createGreenspace));

module.exports = router;