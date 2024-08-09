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
        references: {
          model: "outgoing_docs",
          key: "id",
        },
      },
      outgoing_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "outgoing_attrs",
          key: "outgoing_type_id",
        },
      },
      outgoing_attr_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "outgoing_attrs",
          key: "id",
        },
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
