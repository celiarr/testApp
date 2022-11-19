'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'river_table',
      {
        cardId: { 
          type: Sequelize.INTEGER
        },
        gameLobbyId: {
          type: Sequelize.INTEGER
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('river_table');
  }
};