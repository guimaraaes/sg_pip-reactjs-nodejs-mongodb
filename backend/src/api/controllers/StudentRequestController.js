const { response } = require("express");
const StudentService = require("../services/StudentService");

class StudentRequestController {
  async GetAll(req, res) {
    return await StudentService.FindAll(req, res);
  }

  async GetInfo(req, res) {
    return await StudentService.FindInfo(req, res);
  }

  async GetById(req, res) {
    return await StudentService.FindById(req, res);
  }

  async GetByName(req, res) {
    return await StudentService.FindByName(req, res);
  }

  async Post(req, res) {
    return await StudentService.Create(req, res);
  }

  async GetOnProcess(req, res) {
    return await StudentService.FindOnProcess(req, res);
  }

  async Put(req, res) {
    return await StudentService.Edit(req, res);
  }
}

module.exports = new StudentRequestController();
