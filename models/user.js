module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    },
    createdAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
    updatedAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
  });
  
return user;
}