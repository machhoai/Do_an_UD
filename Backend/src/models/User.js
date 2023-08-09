'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      Users.belongsTo(models.Groups,
        {
          foreignKey: 'groupId',
        })
      Users.belongsToMany(models.Products, { 
        through: 'Purchases', 
        foreignKey: 'mauser',
      })
    }
  }
  Users.init({
    mauser:{
      allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    } ,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    groupId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Groups',
        key: 'groupId'
      }
    } 
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};