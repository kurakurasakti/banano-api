const mysql = require('mysql2')
 
const dbs = mysql.createConnection({
    host : 'banano.localhost',
    user: 'root' ,
    password : '' ,
    database : 'bananos_db' ,
    port : 3306 ,
})

module.exports = dbs

