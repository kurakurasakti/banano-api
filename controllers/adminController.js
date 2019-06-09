const dbs =require('../config/dbMysql');

exports.getUser = (req,res)=>{
    var sql = `select * from users`;
  
    dbs.query(sql, (err, result)=>{
      res.send(result); 
      if (err) {
        res.send(err);
      };
    });
    
}

exports.getBrand = (req,res) =>{
  var sql = `SELECT idbrand, namabrand, gambarbrand FROM bananos_db.brand;`

  dbs.query(sql, (err, result)=>{
    if (err) {
      res.send(err);
    };
    res.send(result);
  });
}