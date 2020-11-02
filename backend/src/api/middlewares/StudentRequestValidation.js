const StudentRequestModel = require("../models/StudentRequestModel");

const StudentRequestValidation = async (req, res, next) => {
  const { name, id_process, aid_name, motivation, quiz, documents } = req.body;
  if (!name) return res.status(400).json({ error: "nome é obrigatório" });
  else if (!id_process)
    return res.status(400).json({ error: "processo é obrigatório" });
  else if (!aid_name)
    return res.status(400).json({ error: "bolsa é obrigatório" });
  else if (!motivation)
    return res.status(400).json({ error: "motivação é obrigatório" });
  else if (!quiz)
    return res.status(400).json({ error: "questionário é obrigatório" });
  else if (!documents)
    return res.status(400).json({ error: "documentos é obrigatório" });
  else {
    let exist;
    // if(req.params.id){
    //     exist = await StudentRequestModel
    //                     .findOne(
    //                     {
    //                         '_id': {'$eq': req.params.id},
    //                         'id_process': {'$eq': id_process}
    //                     });
    // }else {
    exist = await StudentRequestModel.findOne({
      name: { $eq: name },
      id_process: { $eq: id_process },
    });
    // }

    if (exist)
      return res.status(400).json({ error: "aluno já cadastrado no processo" });
    next();
  }
};

module.exports = StudentRequestValidation;
