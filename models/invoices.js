module.exports = (sequelize, Sequelize) => {
    const invoice = sequelize.define('invoice', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      invoiceDate: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        totalPembayaran:{
          type: Sequelize.INTEGER
        },
        confirmPayment:{
            type: Sequelize.BLOB('long')
        },
        ResiPengiriman: {
            type: Sequelize.STRING
        },
        StatusOrder: {
            type: Sequelize.STRING
        },
        createdAt:{ 
            type: Sequelize.DATE, defaultValue: Sequelize.NOW 
        },
        updatedAt:{ 
            type: Sequelize.DATE, defaultValue: Sequelize.NOW 
        },
    });
    
  return invoice;
}