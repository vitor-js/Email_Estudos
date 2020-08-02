'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primarykey:true,
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      },
      email: {
        type:Sequelize.STRING,
        allowNullo:false,
        unique:true,
      },
      phone_number: {
        type:Sequelize.STRING,
        allowNullo:false,
        unique:true,
      },
      password: {
        type:Sequelize.STRING,
        allowNull:false
      },
      email_validate:{
        type:Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false 
      },
      two_factors_validate: {
        type:Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  },
};