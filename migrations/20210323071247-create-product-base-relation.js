'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductBaseRelations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Brands"
          }
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories"
          }
        }
      },
      collectionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Collections"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductBaseRelations');
  }
};