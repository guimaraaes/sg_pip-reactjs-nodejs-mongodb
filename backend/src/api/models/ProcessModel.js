const mongoose = require("../../config/database");

const Schema = mongoose.Schema;
const ProcessModel = new Schema({
  title: { type: String, require: true },
  inprogress: { type: Boolean, require: true },
  date_begin: { type: String, require: false }, //data inicio
  date_end:  { type: String, require: false }, //data fim
  aid_id: { type: Array, require: false }, //id
  aid_name: { type: Array, require: false }, //bolsa
  aid_quantity: { type: Array, require: false }, //quantidade
  selected_studentes_name: { type: Array, require: false }, //quantidade
  selected_studentes_aid: { type: Array, require: false }, //quantidade
});

module.exports = mongoose.model('Process', ProcessModel);