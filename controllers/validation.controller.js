const db = require("../models/index");
// const {Sequelize, Op} = require('sequelize');

let User = db.user;
module.exports.createUser = async (req, res) => {
  var data = {};
  var messages = {};
  try {
    if (req.body.length) {
      data = await User.bulkCreate(req.body);
    } else {
      data = await User.create(req.body);
    }
  } catch (e) {
    let message;
    e.errors.forEach((error) => {
      switch (error.validatorKey) {
        case "isAlpha":
          message = error.message;
          break;
        case "len":
          message = error.message;
          console.log(error);
          break;
      }
      messages[error.path] = message;
    });
  }

  res.status(201).json({ data: data, messages: messages });
};
