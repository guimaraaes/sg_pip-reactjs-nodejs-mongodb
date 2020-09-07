const ProcessModel = require("../models/ProcessModel");

class ProcessController {
  async create(req, res) {
    const process = new ProcessModel(req.body);
    await process
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}

module.exports = new ProcessController();
