const HttpError = require('../models/http-errors');
const { validationResult } = require('express-validator');
const uuid = require('uuid');

const DUMMY_USERS = [
    {id: '123', 
    name: 'User 1',
    email: 'u1@a.com',
    password: 'abcd'
    },
    {id: '124', 
    name: 'User 2',
    email: 'u2@a.com',
    password: '1234'
    }
];

function getAllUsers(req, res, next){
    res.json(DUMMY_USERS);
};

function signup(req, res, next){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new HttpError('Invalid data passed, please check your request body', 422);
    }
    console.log(req.body);
    const { name, email, password} = req.body;
    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if (hasUser){
        throw new HttpError("Could not create user, email already exists.", 422);
    }
    const newUser = {
        id: uuid.v4(), name, email, password
    };
    DUMMY_USERS.push(newUser);
    res.status(201).json(newUser);
};

function login(req, res, next){
    console.log(req.body);
    const { email, password} = req.body;
    const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password){
        throw new HttpError("email/ password incorrect", 401);
    }
    res.json({message: "Logged in"});

};

exports.getAllUsers = getAllUsers;
exports.signup = signup;
exports.login = login;