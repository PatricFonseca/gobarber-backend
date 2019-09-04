module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', {
      avatar_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
    });
  },
};
