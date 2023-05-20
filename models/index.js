const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/mongoose");
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contact = require("./contact.model")(sequelize, DataTypes, Model);
db.user = require("./user.model")(sequelize, DataTypes);
db.sequelize.sync({ force: false });

db.user.hasOne(db.contact, { foreignKey: "user_id"  , as : 'contactDetails' });
db.contact.belongsTo(db.user, );
module.exports = db;
