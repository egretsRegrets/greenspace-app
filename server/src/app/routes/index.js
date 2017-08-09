const express = require('express');
const router = express.Router();
const greenspaceController = require('../controllers/greenspaceController');
const userController = require('../controllers/userController');
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/api/greenspaces', catchErrors(greenspaceController.testGet));

router.post('/api/greenspaces', catchErrors(greenspaceController.createGreenspace));
router.post('/api/users', catchErrors(userController.createUser));

module.exports = router;