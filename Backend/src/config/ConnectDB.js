const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MYPROJECT', 'myproject', 'thienbao123', {
  host: 'localhost',
  dialect: 'mssql',
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default {
  connection
}