const db = require("../models/index");

let User = db.user;

module.exports.getUser = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data: data });
};
module.exports.getUserById = async (req, res) => {
  const data  = await User.findOne({where:{id:req.params.id}})
  res.status(200).json({data})
};
module.exports.createUser = async (req, res) => {
     const data = await User.create(req.body);
     res.status(201).json({ data: data });
};
