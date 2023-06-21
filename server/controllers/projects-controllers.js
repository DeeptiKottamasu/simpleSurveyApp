const HttpError = require('../models/http-errors');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const DUMMY_PROJECTS = [
    {id: '001', 
    name: 'Project 1',
    userId: '123',
    digitalToolId: '001',
    requirements: {type: 'surveyProject'}
    },
    {id: '002', 
    name: 'Project 2',
    userId: '124',
    digitalToolId: '002',
    requirements: {type: 'funProject'}
    },
    {id: '003', 
    name: 'Project 3',
    userId: '123',
    digitalToolId: '002',
    requirements: {type: 'funProject'}
    }
];

function getAllProjects(req, res, next){
    console.log('it works');
    res.json(DUMMY_PROJECTS);
};

function getProjectById(req, res, next){
    console.log('reached correct url');
    const projectId = req.params.projectId ;
    const project = DUMMY_PROJECTS.find(p =>{
        return p.id === projectId;
    });
    if (!project){
        return next(new HttpError("Could not find a project with the id " + projectId, 404));
    }
    console.log(project);
    res.json(project);
};

function getProjectsByUserId(req, res, next){
    const userId = req.params.uid ;
    const projects = DUMMY_PROJECTS.filter(p =>{
        return p.userId === userId;
    });
    if (!projects || projects.length === 0){
        throw new HttpError("Could not find projects for the provided User id: " + userId, 404);
    }
    console.log(projects);
    res.json(projects);
};

function createProject(req, res, next){
    console.log(req.body);
    const { name, userId, digitalToolId, requirements} = req.body;
    const newProject = {
        id: uuid.v4(), name, userId, digitalToolId, requirements
    };
    DUMMY_PROJECTS.push(newProject);
    res.status(201).json(newProject);

};
exports.getProjectsByUserId = getProjectsByUserId;
exports.getProjectById = getProjectById;
exports.getAllProjects = getAllProjects;
exports.createProject = createProject;
