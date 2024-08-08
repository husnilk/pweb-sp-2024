"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("outgoing_attrs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      outgoing_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "outgoing_types",
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      label: {
        type: Sequelize.STRING,
      },
      data_type: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("outgoing_attrs");
  },
};
