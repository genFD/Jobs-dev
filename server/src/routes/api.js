const express = require('express');
const jobsRouter = require('./jobs/jobs.routes');

const api = express.Router();

api.use('/jobs', jobsRouter);

module.exports = api;
