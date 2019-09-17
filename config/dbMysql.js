const mysql = require('mysql2')
 
// const dbs = mysql.createConnection({
//     host : 'localhost',
//     user: 'root' ,
//     password : 'roysaputra' ,
//     database : 'bananos_db' ,
//     port : 3306 ,
// })

const dbs = mysql.createConnection({
    host : 'remotemysql.com',
    user: '0uuPG17qWD' ,
    password : 'kr941B4cU7' ,
    database : '0uuPG17qWD' ,
    port : 3306 ,
})

module.exports = dbs

