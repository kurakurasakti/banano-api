module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING
      },
      // email: {
      //   type: Sequelize.STRING,
      //   unique: true
      // },
      password: {
        type: Sequelize.STRING
      }
    });
    User.associate = function(models) {
      User.belongsToMany(models.role, {
        through: 'user_roles',
        foreignKey: 'user_id',
        as: 'role',
      });
    };
  return User;
}