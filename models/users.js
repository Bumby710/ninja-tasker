const bcrypt = require("bcrypt");

// exporting this model to our index
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    //   define columns of our table
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  //   create custome methods for our user model
  //comparing password to hasdh password
  User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  //   hooks happen on specific senaros

  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
