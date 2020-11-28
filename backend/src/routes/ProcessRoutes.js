const express = require("express");
const router = express.Router();
var Process = require("../api/models/ProcessModel.js");

const ProcessController = require("../api/controllers/ProcessController");
const ProcessValidation = require("../api/middlewares/ProcessValidation");

router.get("/", ProcessController.GetAll);
router.get("/process_info/:title_process_search?", ProcessController.GetInfo);
router.get("/:id", ProcessController.GetById);
router.get("/result_search/:title", ProcessController.GetByTitle);
router.post("/", ProcessValidation, ProcessController.Post);
router.put("/:id", ProcessValidation, ProcessController.Put);
// router.delete("/:id", ProcessController.Delete);

module.exports = router;
