"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Signature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Signature.belongsTo(models.OutgoingDoc, {
      //   foreignKey: "outgoing_doc_id",
      // });
      // models.Signature.belongsTo(models.User, {
      //   foreignKey: "signature",
      // });
    }
  }
  Signature.init(
    {
      outgoing_doc_id: DataTypes.INTEGER,
      signature: DataTypes.INTEGER,
      signed_date: DataTypes.DATE,
      sign_code: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "signatures",
      modelName: "Signature",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return Signature;
};
