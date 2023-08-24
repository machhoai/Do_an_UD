'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sizes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sizes.belongsToMany(models.Products, { 
        through: 'Purchases',
        foreignKey: 'sizeId',
      })
      Sizes.belongsToMany(models.Users, { 
        through: 'Purchases',
        foreignKey: 'sizeId',
      })
    }
  }
  Sizes.init({
    sizeId:{
      allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    } ,
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sizes',
  });
  return Sizes;
};