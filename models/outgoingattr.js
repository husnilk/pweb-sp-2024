"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OutgoingAttr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.OutgoingAttr.belongsTo(models.OutgoingType, {
      //   foreignKey: "outgoing_type_id",
      // });
      // models.OutgoingAttr.hasMany(models.OutgoingValue, {
      //   foreignKey: "outgoing_attr_id",
      // });
    }
  }
  OutgoingAttr.init(
    {
      outgoing_type_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      data_type: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "outgoing_attrs",
      modelName: "OutgoingAttr",
      timestamps: false,
    }
  );
  return OutgoingAttr;
};
