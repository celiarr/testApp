'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'player_table',
      {
        userId: { //foreign key
          type: Sequelize.INTEGER,
          primaryKey: true
        },
       chips: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        chips_won: {
          type:Sequelize.INTEGER, 
          defaultValue: 0
        },
        playerId: {
          type:Sequelize.INTEGER, 
          allowNull: false
        },
      lobbyId: {
          type:Sequelize.INTEGER, 
          
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('player_table');
  }
};