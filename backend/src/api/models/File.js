var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FileSchema = new Schema(
  {
    img: { data: Buffer, contentType: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("File", FileSchema);
