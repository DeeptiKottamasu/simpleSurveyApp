const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const digitalToolsController = require('../controllers/digitaltools-controllers');

router.get('/', digitalToolsController.getAllTools);

router.get('/:toolName', digitalToolsController.getToolByName);

router.get('/:toolName/info', digitalToolsController.getToolByName);

router.post('/', 
    [check('name').not().isEmpty(), 
    check('description').not().isEmpty(),
    check('template').not().isEmpty(),
    check('pricing').not().isEmpty() ], 
    digitalToolsController.createTool);

router.delete('/:toolName', digitalToolsController.deleteToolByName);

router.patch('/:toolName', digitalToolsController.updateToolByName);

module.exports = router;