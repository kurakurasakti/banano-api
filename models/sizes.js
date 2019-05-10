/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const sizes = sequelize.define('sizes', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    bust: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    waist: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    hip: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    length: {
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
  return sizes;
};
