"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OutgoingDoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OutgoingDoc.init(
    {
      seq_no: DataTypes.INTEGER,
      doc_no: DataTypes.STRING,
      doc_date: DataTypes.DATE,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.INTEGER,
      unsigned_file: DataTypes.STRING,
      signed_file: DataTypes.STRING,
      outgoing_type_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "outgoing_docs",
      modelName: "OutgoingDoc",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return OutgoingDoc;
};
