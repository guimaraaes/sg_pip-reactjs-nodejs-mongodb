const { response } = require("express");
const StudentModel = require("../models/StudentRequestModel");

class StudentService {
  async FindAll(req, res) {
    const page = parseInt(req.query.page);
    await StudentModel.find()
      .select({ _id: 1, name: 1, status_coordinator: 1 })
      .skip((page - 1) * 5)
      .limit(5)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async FindById(req, res) {
    await StudentModel.findById(req.params.id)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async FindByName(req, res) {
    const page = parseInt(req.query.page);
    const name_searc = String(req.params.name_search);
    const id_process = String(req.params.id_process);
    // console.log(page + "s");
    await StudentModel.find({
      name: { $regex: name_searc },
      id_process: { $eq: req.params.id_process },
    })
      .select({ _id: 1, name: 1, status_coordinator: 1 })
      .sort("status_coordinator")
      .skip((page - 1) * 5)
      .limit(5)
      .then((response) => {
        if (response) return res.status(200).json(response);
        else return res.status(404).json("processo não encontrado");
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  async FindOnProcess(req, res) {
    const page = parseInt(req.query.page);
    await StudentModel.find({
      id_process: { $eq: req.params.id_process },
    })
      .select({ _id: 1, name: 1, status_coordinator: 1 })
      .sort("status_coordinator")
      .skip((page - 1) * 5)
      .limit(5)
      .then((response) => {
        if (response) return res.status(200).json(response);
        else return res.status(404).json("processo não encontrado");
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async FindInfo(req, res) {
    var total_active = 0;
    var fi = {};

    var req_name = "";
    req.params.student_name
      ? (req_name = String(req.params.student_name))
      : null;
    // console.log(req_title);
    // String(req.params.id_process)
    //   ? (fi = {
    //       id_process: { $regex: String(req.params.id_process) },
    //     })
    //   : (fi = {});

    await StudentModel.find({
      name: { $regex: req_name },
      id_process: req.params.id_process,
    })
      .then((response) => {
        response.map((i) => {
          i.status_coordinator ? total_active : total_active++;
          // total_active++;
        });
        return res.status(200).json({
          total: response.length,
          total_active: total_active,
        });
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  async Create(req, res) {
    const studentrequest = new StudentModel(req.body);
    await studentrequest
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async Edit(req, res) {
    await StudentModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}
module.exports = new StudentService();
