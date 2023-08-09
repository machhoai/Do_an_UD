'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Purchases.init({
    mauser: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references:{
        model: 'Users',
        key: 'mauser'
      }
    },
    maProduct: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      references:{
        model: 'Products',
        key: 'maProduct'
      }
    },
    soLuongMua: DataTypes.INTEGER,
    thanhTien: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Purchases',
  });
  return Purchases;
};