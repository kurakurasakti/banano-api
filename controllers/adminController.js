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