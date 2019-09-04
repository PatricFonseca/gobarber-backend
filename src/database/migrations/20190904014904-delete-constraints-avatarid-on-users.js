module.exports = {
  up: queryInterface => {
    return queryInterface.removeConstraint('users', 'users_avatar_id_fkey');
  },
};
