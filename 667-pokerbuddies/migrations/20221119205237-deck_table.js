'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'deck_table',
      {
        cardId: { ///fk
          type: Sequelize.INTEGER
        },
        deckId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true

        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('deck_table');
  }
};