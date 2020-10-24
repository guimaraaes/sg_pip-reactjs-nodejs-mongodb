const { response } = require("express");
const StudentRequestModel = require("../models/StudentRequestModel");

class StudentRequestController {
    async All(req, res) {
        const page = parseInt(req.query.page)
    
        await StudentRequestModel.find()
            .skip(page)
            .limit(1)
          .then((response) => {
            return res.status(200).json(response);
          })
          .catch((error) => {
            return res.status(500).json(error);
          });
      }
    
      async GetId(req, res) {
        await StudentRequestModel.findById(req.params.id)
        .then((response) => {
          return res.status(200).json(response);
        })
        .catch((error) => {
          return res.status(500).json(error);
        });
      }
    
      async GetName(req, res) {
        await StudentRequestModel.find({'title': {'$eq': req.params.name}})
        .then((response) => {
          if(response)
            return res.status(200).json(response);
          else
            return res.status(404).json('processo não encontrado');
        })
        .catch((error) => {
          return res.status(500).json(error);
        });
       }
    
      async Create(req, res) {
        const studentrequest = new StudentRequestModel(req.body);
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
        await StudentRequestModel
        .findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then((response) => {
          return res.status(200).json(response);
        })
        .catch((error) => {
          return res.status(500).json(error);
        });
      }
    
}

module.exports = new StudentRequestController();
