'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'gameLobby_table',
      {
        lobbyId: { //pk
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
       playerCount: {
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
       turnOrder: {
          type:Sequelize.INTEGER
        },
        pot: {
          type:Sequelize.INTEGER
        },
        deckId: { //fk
          type:Sequelize.INTEGER,
          allowNull: false
        },
        riverId: {
          type:Sequelize.INTEGER,
          allowNull:false
        },
        customBet: {
          type:Sequelize.INTEGER,
          defaultValue: 0
        },
        playerHandId: {
          type:Sequelize.INTEGER
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gameLobby_table');
  }
};