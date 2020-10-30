"use strict";
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          name: "Le Horla",
          isbn: Math.floor(Math.random()*999999999)+1,
          publish: faker.date.past(),
          authorId: Math.floor(Math.random()*3)+1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Des fleurs pour Algernon",
          isbn: Math.floor(Math.random()*99999999)+1,
          publish: faker.date.past(),
          authorId: Math.floor(Math.random()*3)+1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pour pleurer les illusions perdues",
          isbn: Math.floor(Math.random()*99999999)+1,
          publish: faker.date.past(),
          authorId: Math.floor(Math.random()*3)+1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fahrenheit 451",
          isbn: Math.floor(Math.random()*99999999)+1,
          publish: faker.date.past(),
          authorId: Math.floor(Math.random()*3)+1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "De sang-froid",
          isbn: Math.floor(Math.random()*99999999)+1,
          publish: faker.date.past(),
          authorId: Math.floor(Math.random()*3)+1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("People", null, {});
  },
};
