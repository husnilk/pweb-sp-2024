"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IncomingDoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.IncomingDoc.hasMany(models.IncomingDisps, {
      //   foreignKey: "incoming_doc_id",
      // });
    }
  }
  IncomingDoc.init(
    {
      no: DataTypes.STRING,
      date: DataTypes.DATE,
      destination: DataTypes.STRING,
      origin: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      confidential: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: "incoming_docs",
      modelName: "IncomingDoc",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return IncomingDoc;
};
