/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const products = sequelize.define('products', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    price: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    createdAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
    updatedAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    }
  });
  
  return products;
};
