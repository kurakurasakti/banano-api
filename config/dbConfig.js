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

// prod detail

//color

//carts

//invoicedetail


module.exports = db;