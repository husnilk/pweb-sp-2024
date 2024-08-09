"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Staff.belongsTo(models.User, {
      //   foreignKey: "id",
      // });
    }
  }
  Staff.init(
    {
      name: DataTypes.STRING,
      nip: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "staffs",
      modelName: "Staff",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return Staff;
};
