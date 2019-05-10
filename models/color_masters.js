/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  return sequelize.define('color_masters', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    img1: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    img2: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    img3: {
      type: Sequelize.STRING(255),
      allowNull: true
    }, 
    createdAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
    updatedAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
  }, {
    tableName: 'color_masters'
  });
};
