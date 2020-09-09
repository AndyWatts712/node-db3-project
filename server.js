const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const Schemes = require('./schemes/scheme-model')

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;