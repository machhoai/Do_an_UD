'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SizeProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SizeProducts.init({
    sizeId:{
      allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references:{
          model: 'Sizes',
          key: 'sizeId'
        }
    } ,
    maProduct: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      references:{
        model: 'Products',
        key: 'maProduct'
      }
    }
  }, {
    sequelize,
    modelName: 'SizeProducts',
  });
  return SizeProducts;
};