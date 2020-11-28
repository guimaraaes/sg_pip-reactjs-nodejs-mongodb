const express = require("express");
const router = express.Router();

const StudentController = require("../api/controllers/StudentRequestController");
const StudentValidation = require("../api/middlewares/StudentRequestValidation");

router.get("/", StudentController.GetAll);
router.get("/:id", StudentController.GetById);
router.get("/on_process/:id_process/:name_search", StudentController.GetByName);
router.get("/on_process/:id_process", StudentController.GetOnProcess);
router.get(
  "/student_info/:id_process/:student_name?",
  StudentController.GetInfo
);
router.post("/", StudentValidation, StudentController.Post);
router.put("/:id", StudentValidation, StudentController.Put);

module.exports = router;
