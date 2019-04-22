/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sizes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    bust: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    waist: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hip: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    length: {
      type: DataTypes.INTEGER(11),
      allowNull: true
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
    tableName: 'sizes'
  });
};
