module.exports = (sequelize, Sequelize) => {
  const role = sequelize.define('Role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
      type: Sequelize.STRING
    },
    createdAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
    updatedAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
  });
  
  return role;
}