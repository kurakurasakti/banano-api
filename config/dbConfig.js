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

db.user = require('../models/user')(sequelize, Sequelize);
db.role = require('../models/role')(sequelize, Sequelize);
db.product = require('../models/products')(sequelize, Sequelize);
db.product_detail = require('../models/product_details')(sequelize, Sequelize);
db.color_master = require('../models/color_masters')(sequelize, Sequelize);
db.categories = require ('../models/categories')(sequelize, Sequelize);
db.sizes = require ('../models/sizes')(sequelize, Sequelize);


//db.color_masters = require('../models/color_masters')(sequelize, Sequelize);
// db.product_detail = require('../models/products')(sequelize, Sequelize);
// db.sizes = require('../models/sizes')(sequelize, Sequelize);

//user role
db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
//product => color
// db.product.hasMany(db.color_master, {foreignKey:'productId', sourcekey: 'id'});
// db.color_master.belongsTo(db.product, {foreignKey: 'productId', targetkey: 'id'});
// //color => product detail
// db.color_master.hasMany(db.product_detail, {foreignKey:'colorId',sourcekey: 'id'});
// db.product_detail.hasMany(db.color_master, {foreignKey: 'colorId', targetkey : 'id'});
// //product detail => size 
// db.product_detail.hasMany(db.sizes, {foreignKey: 'sizeId', sourcekey: 'id'});
// db.sizes.belongsTo(db.product_detail, {foreignKey: 'sizeId', targetkey: 'id'});
// // cat to prod
// db.categories.hasMany(db.product, {foreignKey: 'categoryId', sourcekey :'id'});
// db.product.belongsTo(db.categories, {foreignKey: 'categoryId', targetkey: 'id'});



module.exports = db;