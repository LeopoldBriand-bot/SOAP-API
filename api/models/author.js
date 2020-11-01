'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.Book, {foreignKey:'authorId', onDelete: 'CASCADE'})
    }
  };
  Author.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};