var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./routes/router')(app);

// const db = require('./config/dbConfig');

// const Role = db.role;
const port = 2001;

// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });

// jalanin Server
app.listen(port , ()=> console.log('activated ' + port));

// function initial() {
// 	Role.create({
// 		id: 1,
// 		name: "USER"
// 	});

// 	Role.create({
// 		id: 3,
// 		name: "ADMIN"
// 	});
// }