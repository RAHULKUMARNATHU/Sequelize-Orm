const { DataTypes } = require("sequelize");
const sequelize = require("../config/mongoose");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      defaultValue:''
    },
  },
  {
    /*Options  */
    // tableName: "users",
    // createdAt:false,
    // updatedAt:'updated_At'
    // timestamps:false
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;
