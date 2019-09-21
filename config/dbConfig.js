const env = require('./env');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.article = require('../models/article.js')(sequelize, Sequelize);
db.user = require('../models/user.js')(sequelize, Sequelize);
db.role = require('../models/role.js')(sequelize, Sequelize);
db.product = require('../models/products.js')(sequelize, Sequelize);//categoryId
db.product_detail = require('../models/product_details.js')(sequelize, Sequelize);//colorID sizeID
db.color_master = require('../models/color_masters.js')(sequelize, Sequelize);//productId
db.categories = require ('../models/categories.js')(sequelize, Sequelize);
db.sizes = require ('../models/sizes.js')(sequelize, Sequelize);
db.carts = require('../models/carts.js')(sequelize, Sequelize);//prodDetailId, userId
db.invoice = require('../models/invoices.js')(sequelize,Sequelize);



//db.color_masters = require('../models/color_masters')(sequelize, Sequelize);
// db.product_detail = require('../models/products')(sequelize, Sequelize);
// db.sizes = require('../models/sizes')(sequelize, Sequelize);

//user role
db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
// product

db.product.hasMany(db.color_master, {foreignKey: 'productId', sourceKey: 'id'});
db.color_master.belongsTo(db.product, {foreignKey: 'productId', sourceKey: 'id'});

// prod detail
db.color_master.hasMany(db.product_detail, {foreignKey: 'colorId', sourceKey:'id'});
db.product_detail.belongsTo(db.color_master, {foreignKey: 'colorId', sourceKey:'id'})
db.product_detail.belongsTo(db.sizes, {foreignKey: 'sizeId', sourceKey:'id'})
db.sizes.hasMany(db.product_detail, {foreignKey: 'sizeId', sourceKey:'id'});

module.exports = db;
