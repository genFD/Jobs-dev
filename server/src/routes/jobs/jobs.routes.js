const express = require("express");

const {
  getDevjobs,
  filterDevjobs,
  getSinglejob,
  filterByLocation,
  filterByContract,
} = require("./jobs.controller");

const jobsRouter = express.Router();

jobsRouter.get("/jobs", getDevjobs);
jobsRouter.get("/jobs/search", filterDevjobs);
jobsRouter.get("/jobs/search/location", filterByLocation);
jobsRouter.get("/jobs/search/contract", filterByContract);
jobsRouter.get("/jobs/:id", getSinglejob);

module.exports = jobsRouter;
