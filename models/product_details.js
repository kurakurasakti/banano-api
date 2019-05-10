
module.exports = function(sequelize, Sequelize) {
  const product_details =  sequelize.define('product_details', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    harga: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    stock: {
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
  
  return product_details;
};
