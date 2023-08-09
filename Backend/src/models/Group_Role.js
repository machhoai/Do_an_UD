'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupRoles.init({
    groupId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references:{
        model: 'Groups',
        key: 'groupId'
      }
    },
    roleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references:{
        model: 'Roles',
        key: 'roleId'
      }
    }
  }, {
    sequelize,
    modelName: 'GroupRoles',
  });
  return GroupRoles;
};