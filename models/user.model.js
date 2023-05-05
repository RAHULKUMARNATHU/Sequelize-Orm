module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        get(){
          const rawValue = this.getDataValue('firstName');
          return rawValue ? rawValue.toUpperCase() : null;
        }
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
        defaultValue: "",
        set(value){

          this.setDataValue('lastName',  value )
          // this.setDataValue('lastName',  value +'  '+ " ,India")
        }
      },
      fullName:{
        type: DataTypes.VIRTUAL,
        get(){
          return `${this.firstName} ${this.lastName}`;
      },
       set(value){
          this.setDataValue('fullName', value);
        }
    }
    // set(value){
    //   // this.setDataValue('fullName', value);
    // }
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
  return User;
};
// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
// module.exports = User;
