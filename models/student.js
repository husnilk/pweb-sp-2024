"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Student.belongsTo(models.User, {
      //   foreignKey: "id",
      // });
      // models.Student.belongsTo(models.Lecturer, {
      //   foreignKey: "advisor_id",
      // });
      // models.Student.hasMany(models.OutgoingListValue, {
      //   foreignKey: "student_id",
      // });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      nim: DataTypes.STRING,
      year: DataTypes.INTEGER,
      advisor_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "students",
      modelName: "Student",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return Student;
};
