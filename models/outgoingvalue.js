"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OutgoingValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.OutgoingValue.belongsTo(models.OutgoingDoc, {
      //   foreignKey: "outgoing_doc_id",
      // });
      // models.OutgoingValue.belongsTo(models.OutgoingAttr, {
      //   foreignKey: "outgoing_attr_id",
      // });
      // models.OutgoingValue.belongsTo(models.OutgoingType, {
      //   foreignKey: "outgoing_type_id",
      // });
    }
  }
  OutgoingValue.init(
    {
      outgoing_doc_id: DataTypes.INTEGER,
      outgoing_type_id: DataTypes.INTEGER,
      outgoing_attr_id: DataTypes.INTEGER,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "outgoing_values",
      modelName: "OutgoingValue",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return OutgoingValue;
};
