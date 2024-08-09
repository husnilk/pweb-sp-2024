"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IncomingDisp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.IncomingDisp.belongsTo(models.IncomingDoc, {
      //   foreignKey: "incoming_doc_id",
      // });
      // models.IncomingDisp.belongsTo(models.User, {
      //   foreignKey: "user_id",
      // });
      // models.IncomingDisp.hasMany(models.IncomingDisp, {
      //   foreignKey: "parent_id",
      // });
    }
  }
  IncomingDisp.init(
    {
      incoming_doc_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      parent_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "incoming_disps",
      modelName: "IncomingDisp",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return IncomingDisp;
};
