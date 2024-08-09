"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OutgoingType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.OutgoingType.hasMany(models.OutgoingAttr, {
      //   foreignKey: "outgoing_type_id",
      // });
      // models.OutgoingType.hasMany(models.OutgoingDoc, {
      //   foreignKey: "outgoing_type_id",
      // });
    }
  }
  OutgoingType.init(
    {
      name: DataTypes.STRING,
      lang: DataTypes.STRING,
      status: DataTypes.INTEGER,
      generated: DataTypes.BOOLEAN,
      template_file: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "outgoing_types",
      modelName: "OutgoingType",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return OutgoingType;
};
