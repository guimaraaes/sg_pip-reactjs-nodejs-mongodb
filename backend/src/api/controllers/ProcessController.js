const { response } = require("express");
const ProcessModel = require("../models/ProcessModel");
const ProcessService = require("../services/ProcessService");

class ProcessController {
  async GetAll(req, res) {
    return await ProcessService.FindAll(req, res);
  }

  async GetInfo(req, res) {
    return await ProcessService.FindInfo(req, res);
  }

  async GetById(req, res) {
    return await ProcessService.FindById(req, res);
  }

  async GetByTitle(req, res) {
    return await ProcessService.FindByTitle(req, res);
  }

  async Post(req, res) {
    return await ProcessService.Create(req, res);
  }

  async Put(req, res) {
    return await ProcessService.Edit(req, res);
  }

  async Put(req, res) {
    return await ProcessService.Edit(req, res);
  }
}

module.exports = new ProcessController();
