const express = require("express");
const router = express.Router();

const ProcessController = require("../api/controllers/ProcessController");

router.post("/", ProcessController.create);

module.exports = router;
