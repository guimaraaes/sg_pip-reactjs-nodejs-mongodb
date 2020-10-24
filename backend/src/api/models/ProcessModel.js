const mongoose = require("../../config/database");

const Schema = mongoose.Schema;
const ProcessModel = new Schema({
  title: { type: String, require: true },
  inprogress: { type: Boolean, require: false },
  date_begin: { type: String, require: true }, //data inicio
  date_end:  { type: String, require: true }, //data fim
  aid_id: { type: Array, require: true }, //id
  aid_name: { type: Array, require: true }, //bolsa
  aid_quantity: { type: Array, require: true }, //quantidade
  selected_studentes_name: { type: Array, require: false }, //quantidade
  selected_studentes_aid: { type: Array, require: false }, //quantidade
});

module.exports = mongoose.model('Process', ProcessModel);