const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/mongoose");
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contact = require("./contact.model")(sequelize, DataTypes, Model);
db.user = require("./user.model")(sequelize, DataTypes);
// sequelize.drop(db.contact)

// db.user.hasOne(db.contact, { foreignKey: "user_id"  , as : 'contactDetails' });
// db.user.hasMany(db.contact, { foreignKey: "user_id", as: "contactDetails" });
// db.contact.belongsTo(db.user, );
db.user.belongsToMany(db.contact, {
  through: "User_Contact",
  as: "contactDetails",
});
db.contact.belongsToMany(db.user, {
  through: "User_Contact",
  as: "userDetails",
});

db.sequelize.sync({ force: false });

module.exports = db;
