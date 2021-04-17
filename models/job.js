'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // one to many
      Job.belongsTo(models.User, {foreignKey: "userId"})
    }
  };
  Job.init({
    userId: DataTypes.INTEGER,
    job: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};