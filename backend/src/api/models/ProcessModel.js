const mongoose = require("../../config/database");

const Schema = mongoose.Schema;
const ProcessModel = new Schema({
  title: { type: String, require: true },
  inprogress: { type: Boolean, require: true },
  aid_se: [
    { type: Number, require: true }, //id
    { type: String, require: true }, //bolsa
    { type: Number, require: true }, //quantidade
    { type: Date, require: true }, //data inicio
    { type: Date, require: true }, //data fim
  ],
  students: [
    { type: Number, require: true }, //matricula
    { type: String, require: true }, //nome
    { type: Number, require: true }, //id bolsa
  ],
});
