const express = require("express");
const router = express.Router();

const upload = require("../config/gridfs");
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

//gridfs
const url = "mongodb://mongo:27017/sis_pip";
const mongoose = require("mongoose");

var conn = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads",
  });
});
// init gfs
// var multer = require("multer");
// var upload = multer({ dest: "uploads/" });
router.post("/upload", upload.single("file"), (req, res) => {
  return res.status(200).json({
    filename: req.file.filename,
  });
});

router.get("/image/:filename", (req, res) => {
  // console.log('id', req.params.id)
  const file = gfs
    .find({
      filename: req.params.filename,
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist",
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});
module.exports = router;
