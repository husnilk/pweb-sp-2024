"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("signatures", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      outgoing_doc_id: {
        type: Sequelize.INTEGER,
      },
      signature: {
        type: Sequelize.INTEGER,
      },
      signed_date: {
        type: Sequelize.DATE,
      },
      sign_code: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("signatures");
  },
};
