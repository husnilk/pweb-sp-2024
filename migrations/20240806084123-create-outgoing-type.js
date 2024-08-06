"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("OutgoingTypes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      lang: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      generated: {
        type: Sequelize.BOOLEAN,
      },
      template_file: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("OutgoingTypes");
  },
};
