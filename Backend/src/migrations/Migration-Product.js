'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      maProduct: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      productName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      soLuong: {
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productInfo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sale: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nameImage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        
        type: Sequelize.DATE
      },
      updatedAt: {
        
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};