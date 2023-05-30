const db = require("../models");

const Contact = db.contact;
const User = db.user;

module.exports.getUser = async (req , res) => {
  const user = await User.findOne({
    include: [
      {
        model: Contact,
        as: "contactDetails",
        attributes: ["current_address", "permanent_address"],
      },
    ],
    where: { id: 2 },
  });
  res.status(200).json({ data: user });
};

module.exports.createUser = async (req, res) => {
  const data = await Contact.create({
    permanent_address: "Giridih , Jharkhand",
    current_address: "Ahmedabad , Gujrat",
    user_id: 2,
  });
  res.status(200).json({ data });
};
