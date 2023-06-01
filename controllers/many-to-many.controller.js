const db = require("../models");
const User = db.user;
const Contact = db.contact;

module.exports.getUser = async (req, res) => {
  const data = await User.findAll({
    include: [
      {
        model: Contact,
        as: "contactDetails",
        attributes: ["current_address", "permanent_address"],
      },
    ],
    where: {
      id: 1,
    },
  });
  res.status(200).json({ data: data });
};

module.exports.getContact = async (req, res) => {
  const data = await Contact.findAll({
    include: [
      {
        model: User,
        as: "userDetails",
        attributes: ["firstName" , "lastName" , "fullName"]
      },
    ],
    where: {
      id: 1,
    },
  });
  res.status(200).json({ data: data });
};

module.exports.createUser = async (req, res) => {
  const data = await User.create({
    firstName: "maven",
    lastName: "",
  });
  //   const newContact = await Contact.create({
  //     permanent_address: "xyz",
  //     current_address: "abc",
  //   });

  //   const result = await newContact.addUser(data);
  const result = await data.addContact(1);
  console.log(result);
  res.status(201).json({ data: data });
};
