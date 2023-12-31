'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Purchases', {
      mauser: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maProduct:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      sizeId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      soLuongMua: {
        type: Sequelize.INTEGER
      },
      thanhTien: {
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
    await queryInterface.dropTable('Purchases');
  }
};