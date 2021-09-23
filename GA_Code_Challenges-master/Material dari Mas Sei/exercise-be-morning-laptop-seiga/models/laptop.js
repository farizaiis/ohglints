'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laptop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      laptop.belongsTo(models.laptopBrand, {as : "paijo", foreignKey : "idBrand" })
    }
  };
  laptop.init({
    name: DataTypes.STRING,
    idBrand: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'laptop',
  });
  return laptop;
};