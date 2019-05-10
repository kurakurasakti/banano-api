/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const categories = sequelize.define('categories', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
  
  return categories;
};
