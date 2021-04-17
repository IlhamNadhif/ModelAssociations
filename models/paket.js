'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // many to many
      Paket.belongsToMany(models.User, {through: "User_Paket", foreignKey: "paketId"});
    }
  };
  Paket.init({
    paket: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paket',
  });
  return Paket;
};