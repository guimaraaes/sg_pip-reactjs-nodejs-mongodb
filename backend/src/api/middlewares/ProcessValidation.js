const ProcessModel = require("../models/ProcessModel");
const { ispass } = require("date-fns");

const ProcessValidation = async (req, res, next) => {
  const { title, date_begin, date_end, aid_name } = req.body;
  if (!title) return res.status(400).json({ error: "título é obrigatório" });
  else if (!date_begin)
    return res.status(400).json({ error: "data início é obrigatório" });
  // else if(ispass(new Date(date_begin)))
  //     return res.status(400).json({error: 'data início deve ser futura'})
  else if (!date_end)
    return res.status(400).json({ error: "data fim é obrigatório" });
  else if (!aid_name)
    return res.status(400).json({ error: "bolsas é obrigatório" });
  else {
    let exist;
    if (req.params.id) {
      exist = await ProcessModel.findOne({
        _id: { $ne: req.params.id },
        title: { $eq: title },
      });
    } else {
      exist = await ProcessModel.findOne({
        title: { $eq: title },
      });
    }

    if (exist) return res.status(400).json({ error: "process já cadastrado" });
    next();
  }
};

module.exports = ProcessValidation;
