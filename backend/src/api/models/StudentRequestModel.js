const mongoose = require("../../config/database");

const Schema = mongoose.Schema;

const StudentRequestModel = new Schema({
  name: { type: String, require: true },
  id_process: { type: String, require: true },
  status_coordinator: { type: Boolean, require: true },
  status_coordinator_description: { type: String, require: true },
  aid_name_selected: { type: String, require: true },
  parent_name: { type: Array, require: true }, //nome
  parent_date_born: { type: Array, require: true }, //nome
  parent_rent: { type: Array, require: true }, //nome
  parent_profession: { type: Array, require: true }, //nome
  motivation: { type: String, require: true }, //motivação
  quiz: { type: Array, require: true },
  documents: { type: Array, require: true },
});

module.exports = mongoose.model("StudentRequest", StudentRequestModel);
