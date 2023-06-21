const HttpError = require('../models/http-errors');
const { validationResult } = require('express-validator');
const uuid = require('uuid');

let DUMMY_DIGITAL_TOOLS = [
    {id: '001', 
    name: 'SurveyTool',
    description: 'Submit Survey Requests through this tool', 
    image: 'https://jobycodirect.com/images/items/random-small-images43.png',
    template: {},
    pricing: {}
    },
    {id: '002', 
    name: 'FunTool',
    description: 'Have fun this tool', 
    image: 'https://jobycodirect.com/images/items/random-small-images44.png',
    template: {},
    pricing: {}
    }
];

function getAllTools(req, res, next){
    res.json(DUMMY_DIGITAL_TOOLS);
};

function getToolByName(req, res, next){
    console.log('reached correct url');
    const toolName = req.params.toolName;
    const tool = DUMMY_DIGITAL_TOOLS.find(t =>{
        return t.name === toolName;
    });
    if (!tool) {
        throw new HttpError('Could not find a Digital Tool with the provided name.' + toolName, 404);
    }
    console.log(tool);
    res.json(tool);
};

function deleteToolByName(req, res, next){
    const toolName = req.params.toolName;
    DUMMY_DIGITAL_TOOLS = DUMMY_DIGITAL_TOOLS.filter(t =>t.name !== toolName);
    res.status(200).json({message: "Deleted tool "+ toolName});
};

function updateToolByName(req, res, next){
    console.log('inside update');
    console.log(req.params.toolName);
    const { description, image, template, pricing} = req.body;
    const toolName = req.params.toolName;
    const updatedTool = {...DUMMY_DIGITAL_TOOLS.find(t =>{return t.name === toolName; })};
    if (!updatedTool) {
        throw new HttpError('Could not find a Digital Tool with the provided name.' + toolName, 404);
    }
    console.log('here 1');
    updatedTool.description = description;
    updatedTool.image = image;
    updatedTool.template = template;
    updatedTool.pricing = pricing;
    const toolIndex = DUMMY_DIGITAL_TOOLS.findIndex(t =>{return t.name === toolName; });
    DUMMY_DIGITAL_TOOLS[toolIndex] = updatedTool;
    console.log('here 2');
    res.status(200).json({'tool': updatedTool});
};

function createTool(req, res, next){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new HttpError('Invalid data passed, please check your request body', 422);
    }
    const { name, description, image, template, pricing} = req.body;
    const newTool = {
        id: uuid.v4(), name, description, image, template, pricing
    };
    DUMMY_DIGITAL_TOOLS.push(newTool);
    res.status(201).json(newProject);

};

exports.getAllTools = getAllTools;
exports.getToolByName = getToolByName;
exports.deleteToolByName = deleteToolByName;
exports.updateToolByName = updateToolByName;
exports.createTool = createTool;

