"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Functional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Functional.init(
    {
      name: DataTypes.STRING,
      abbr: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "functionals",
      modelName: "Functional",
      timestamps: false,
    }
  );
  return Functional;
};
