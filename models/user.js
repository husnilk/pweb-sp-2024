"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.User.hasOne(models.Student, {
      //   foreignKey: "id",
      // });
      // models.User.hasOne(models.Staff, {
      //   foreignKey: "id",
      // });
      // models.User.hasOne(models.Lecturer, {
      //   foreignKey: "id",
      // });
      // models.User.hasMany(models.Signature, {
      //   foreignKey: "signature",
      // });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      type: DataTypes.STRING,
      role: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  return User;
};
