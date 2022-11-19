'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'card_table',
      {
        cardId: { 
          type: Sequelize.INTEGER,
          primaryKey: true
        },
       suit: {
          type: Sequelize.CHAR,
          allowNull: false
        },
        Number: {
          type:Sequelize.INTEGER, 
          allowNull: false
        },
        beenShown: {
          type:Sequelize.BOOLEAN, 
          defaultValue: false
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('card_table');
  }
};