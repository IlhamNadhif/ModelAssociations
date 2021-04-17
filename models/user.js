'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // one to one
      User.hasOne(models.Biodata, {foreignKey: "userId", as: "biodata"});

      // one to many
      User.hasMany(models.Job, {foreignKey: "userId", as: "jobs"});

      // many to many
      User.belongsToMany(models.Paket, {through: "User_Paket", foreignKey: "userId", as: "pakets"});
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};