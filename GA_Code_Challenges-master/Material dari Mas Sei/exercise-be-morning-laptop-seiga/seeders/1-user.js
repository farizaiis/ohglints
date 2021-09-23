"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@doe.com",
          password: "cobacoba",
          updatedAt : new Date(),
          createdAt : new Date()
        },
        {
          name: "Seiga",
          email: "aghifari@binar.co.id",
          password: "abcd1234",
          updatedAt : new Date(),
          createdAt : new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
