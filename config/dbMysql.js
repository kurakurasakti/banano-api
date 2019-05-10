const mysql = require('mysql2')
 
const dbs = mysql.createConnection({
    host : 'localhost',
    user: 'root' ,
    password : 'roysaputra' ,
    database : 'bananos_db' ,
    port : 3306 ,
})

module.exports = dbs

