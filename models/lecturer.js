"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Lecturer.belongsTo(models.User, {
      //   foreignKey: "id",
      // });
      // models.Lecturer.hasMany(models.Student, {
      //   foreignKey: "advisor_id",
      // });
      // models.Lecturer.belongsTo(models.Functional, {
      //   foreignKey: "functional_id",
      // });
    }
  }
  Lecturer.init(
    {
      name: DataTypes.STRING,
      nip: DataTypes.STRING,
      functional: DataTypes.INTEGER,
      nidn: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "lecturers",
      modelName: "Lecturer",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return Lecturer;
};
