const { QueryTypes, where } = require("sequelize");
const db = require("../models");
const User = db.user;
const Contact = db.contact;
module.exports.getUser = async (req, res) => {
  const data = await User.findAll({
    attributes: ["firstName", "lastName"],
    include: [
      {
        model: Contact,
        attributes: ["current_address", "permanent_address"],
      },
    ],
    where: { id: 2 },
  });

  res.status(200).json({ data: data });
};

module.exports.createUser = async (req, res) => {
  const data = await User.create({
    firstName: "John",
    lastName: "Doe",
  });
  console.log(data);
  if (data && data.id) {
    await Contact.create({
      permanent_address: "xyz",
      current_address: "abc",
      user_id: data.id,
    });
  }
  res.status(201).json({ data: data });
};
