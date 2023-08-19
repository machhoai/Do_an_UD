'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsToMany(models.Users, { 
        through: 'Purchases', 
        foreignKey: 'maProduct',
      })
      Products.belongsToMany(models.Sizes, { 
        through: 'SizeProducts', 
        foreignKey: 'maProduct',
      })
    }
  }
  Products.init({
    maProduct: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    productName: DataTypes.STRING,
    soLuong: DataTypes.INTEGER,
    price: DataTypes.STRING,
    productInfo: DataTypes.STRING,
    sale: DataTypes.INTEGER,
    nameImage: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};