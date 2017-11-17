const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const User = require('./UserModel.js');

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.post('/users', function(req, res) {
    const newUser = new User(req.body);
    newUser.save(function(err, user) {
        if(err) {
            res.status(STATUS_SERVER_ERROR).json({ error: "could not create user" });
        } else {
            res.status(200).json(user);
        }
    });
});

server.get('/users', function(req, res) {
    User.find(function(err, user) {
        if(err) {
            res.status(STATUS_SERVER_ERROR).json({ error: "could not find that user"});
        } else {
            res.status(200).send(user);
        }
    })
})

server.get