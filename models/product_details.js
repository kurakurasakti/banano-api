/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const product_details =  sequelize.define('product_details', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    harga: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    colorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'color_masters',
        key: 'id'
      }
    },
    sizeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sizes',
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
  })
  product_details.associate = function(models){
    product_details.belongsTo(models.color_masters,{
      foreignKey: '',
      sourceKey: 'prov_code'
    })
  };
  return product_details;
};
