/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const carts = sequelize.define('carts', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    qty: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    isDeleted: {
      type: Sequelize.INTEGER(4),
      allowNull: false
    },
    createdAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
    updatedAt:{ 
      type: Sequelize.DATE, defaultValue: Sequelize.NOW 
    },
  });

return carts;
};
