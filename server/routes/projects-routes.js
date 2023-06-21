const express = require('express');
const projectController = require('../controllers/projects-controllers');

const router = express.Router();

router.get('/', projectController.getAllProjects);

router.get('/user/:uid', projectController.getProjectsByUserId);

router.get('/:projectId', projectController.getProjectById);

router.get('/:projectId/info', projectController.getProjectById);

router.post('/createProject', projectController.createProject);

module.exports = router;