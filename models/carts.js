/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    productDetailId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product_details',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    qty: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'carts'
  });
};
