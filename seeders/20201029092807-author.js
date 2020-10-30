'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Authors', [{
       firstName: 'John',
       lastName: 'Doe',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      firstName: 'Leopold',
      lastName: 'Briand',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Rodrigez',
      lastName: 'Smith',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Jack',
      lastName: 'The Ripper',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};
