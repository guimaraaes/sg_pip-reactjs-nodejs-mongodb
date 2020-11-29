const crypto = require("crypto");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const url = "mongodb://mongo:27017/sis_pip";
let gfs;

var conn = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose
  .connect(url, { useNewUrlParser: true })
  .then((result) => {
    console.log("MongoDB Conectado");
    // gfs = new mongoose.mongo.GridFSBucket(result.connection, {
    //   bucketName: "uploads",
    // });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;
