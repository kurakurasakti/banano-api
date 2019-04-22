/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('color_masters', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    img1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    img2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    img3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'color_masters'
  });
};
