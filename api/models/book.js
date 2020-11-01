'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, {foreignKey:'authorId'})
    }
  };
  Book.init({
    name: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    publish: DataTypes.DATE,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};