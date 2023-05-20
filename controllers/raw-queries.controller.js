const db = require("../models/index");
const { QueryTypes } = require("sequelize");
const userModel = require("../models/user.model");

/*Get all users details */
module.exports.getAllUser = async (req, res) => {
  var data = {};
  try {
    data = await db.sequelize.query("SELECT * FROM `Users`", {
      type: QueryTypes.SELECT,
    });
  } catch (e) {}
  res.status(200).json({ data: data });
};

/*Get all users with model details  */

module.exports.getAllUserWithModel = async (req, res) => {
  var data = {};
  try {
    data = await db.sequelize.query("SELECT * FROM `Users`", {
      type: QueryTypes.SELECT,
      model: db.user,
      mapToModel: true,
      logging: console.log,
      plain: true,
    });
  } catch (e) {}
  res.status(200).json({ data: data });
};

/*Get User detail of id:1 */

module.exports.getUserById = async (req, res) => {
  var data = {};
  try {
    /*Select query is for replacements there will be , 'in' */
    // data = await db.sequelize.query("SELECT * FROM Users WHERE id in (:id) ", {
    //   nest: true,
    //   type: QueryTypes.SELECT,
    //   /*we can pass multiple values inside the array [1,3] or {status:[active , inactive]} */
    //   replacements: { id: [req.params.id] },
    /*we are using bind  instead of replacements */
    data = await db.sequelize.query("SELECT * FROM Users WHERE id = $id ", {
      nest: true,
      type: QueryTypes.SELECT,
      bind: { id: req.params.id },
    });
  } catch (e) {}
  res.status(200).json({ data: data });
};

/*Get all user by userName  using LIKE */
module.exports.getUserByName = async (req, res) => {
  var data = {};
  try {
    data = await db.sequelize.query(
      "SELECT * FROM Users WHERE firstName LIKE :search_name",
      {
        replacements: { search_name: `${req.params.name}%` },
        type: QueryTypes.SELECT,
        nest: true,
      }
    );
  } catch (e) {}
  res.status(200).json({ data: data });
};
