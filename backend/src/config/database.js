const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/sis_pip";

mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;
