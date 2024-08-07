"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("outgoing_values", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      outgoing_doc_id: {
        type: Sequelize.INTEGER,
      },
      outgoing_type_id: {
        type: Sequelize.INTEGER,
      },
      outgoing_attr_id: {
        type: Sequelize.INTEGER,
      },
      value: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("outgoing_values");
  },
};
