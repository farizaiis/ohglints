'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laptopBrand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      laptopBrand.hasMany(models.laptop, { as : "laptops", foreignKey : "idBrand" })
    }
  };
  laptopBrand.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'laptopBrand',
  });
  return laptopBrand;
};