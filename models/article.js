module.exports = (sequelize, Sequelize) => {
    const article = sequelize.define('article', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      article: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.BLOB('long')
      },
      createdAt:{ 
        type: Sequelize.DATE, defaultValue: Sequelize.NOW 
      },
      updatedAt:{ 
        type: Sequelize.DATE, defaultValue: Sequelize.NOW 
      }

    });
    
  return article;
}