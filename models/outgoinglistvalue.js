"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OutgoingListValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.OutgoingListValue.belongsTo(models.OutgoingValue, {
      //   foreignKey: "outgoing_value_id",
      // });
      // models.OutgoingListValue.belongsTo(models.Student, {
      //   foreignKey: "student_id",
      // });
    }
  }
  OutgoingListValue.init(
    {
      outgoing_value_id: DataTypes.INTEGER,
      student_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "outgoing_list_values",
      modelName: "OutgoingListValue",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return OutgoingListValue;
};
