const dbs =require('../config/dbMysql');

// const Product = db.product;
// const Color = db.color_master;


// const Op = db.Sequelize.Op;

exports.getProduct = (req,res)=>{
  // var sql = `select p.id as productId, pd.id as pdid, p.name, c.name as category, pd.price, pd.stock, cm.name as warna, s.name as size, pd.imgURL, pd.status
  // from product_details pd
  // join color_masters cm on cm.id = pd.colorId	
  // join sizes s on s.id = pd.sizeId
  // join products p on p.id = cm.productId
  // join categories c on c.id = p.categoryId
  // where pd.status = 1`;

  const sql = `select p.id, p.name, p.description, ps.price, cm.name as color, cm.img1 from products p
  join color_masters cm on cm.productId = p.id
  join prices ps on ps.productId = p.id`

  dbs.query(sql, (err, result)=>{
    res.send(result);
    if (err) {
      res.send(err);
    };
  });
}

exports.getProductDetail = (req,res)=>{
  var id = req.params.id
  var sql = `select p.id as productId, pd.id as productDetailid, p.nama, c.nama as category, 
  pd.price, pd.stock, cm.nama as warna, s.nama as size, p.description,
  cm.img1, cm.img2, cm.img3, s.bust, s.hip, s.length, s.waist
  from product_details pd
  join color_masters cm on cm.id = pd.colorId	
  join sizes s on s.id = pd.sizeId
  join products p on p.id = cm.productId
  join categories c on c.id = p.categoryId
  where pd.id = ${id}`

  dbs.query(sql, (err, result)=>{
    res.send(result);
    if (err) {
      res.send(err);
    };
  });
}

exports.showCart = (req,res)=>{
  var id = req.body.userId
  var sql = `SELECT cr.id, cr.userId, p.nama as product, cr.qty, pd.price, SUM(pd.price * cr.qty) as totalBelanja, s.nama as size, cm.img1
  FROM carts cr
  join product_details pd on pd.id = cr.productDetailId
  join color_masters cm on cm.id = pd.colorId
  join sizes s on s.id = pd.sizeId
  join products p on p.id = cm.productId
  where cr.userId = ${id}
  and cr.isDeleted = false
  group by cr.id;`

  dbs.query(sql, (err, result)=>{
    if (err) {
      console.log('error'+err);
      res.status(400).send(err);
    }
    // var json = {};
    // json["items"] = result;   
    // json["totalHarga"] = result.reduce(function (accumulator, currentValue) {
    //   return accumulator + parseInt(currentValue["totalBelanja"]);
    // }, 0);

    res.send(result);
  });
}

exports.showCartWithTotal = (req,res)=>{
  var id = req.body.userId
  var sql = `SELECT cr.id, cr.userId, p.nama as product, cr.qty, pd.price, SUM(pd.price * cr.qty) as totalBelanja, s.nama as size, cm.img1
  FROM carts cr
  join product_details pd on pd.id = cr.productDetailId
  join color_masters cm on cm.id = pd.colorId
  join sizes s on s.id = pd.sizeId
  join products p on p.id = cm.productId
  where cr.userId = ${id}
  and cr.isDeleted = false
  group by cr.id;`

  dbs.query(sql, (err, result)=>{
    if (err) {
      console.log('error'+err);
      res.status(400).send(err);
    }
    var json = {};
    json["items"] = result;   
    json["totalHarga"] = result.reduce(function (accumulator, currentValue) {
      return accumulator + parseInt(currentValue["totalBelanja"]);
    }, 0);

    res.send(json);
  });
}

exports.addToChart = (req,res) => {
  var qty = req.body.qty;
  var productId = req.body.productDetailId;
  var userId = req.userId;

  //console.log(qty, productId, userId);
  var sql = `insert into carts (productDetailId, userId, qty, isDeleted)
  values (${productId},${userId},${qty},false)`;
  dbs.query(sql, (err, result)=>{
    if (err) throw err;
    res.status(200).send("successfully add item to cart");
    // res.send(result);
    // console.log("masuk");
  });
  
};

exports.checkout = (req,res) => {
  var userId = req.userId;
  dateTime = new Date();

  const day = dateTime.getDate();
  console.log(day);
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  const code = dateTime.getMilliseconds();
  const code2 = dateTime.getSeconds();
  const invoiceDate = `${year}-${month}-${day}`;
  const invNumber = `INV-${invoiceDate}-${code}${code2}`;

  console.log(invNumber);
  // const grandTotal
  

  const sqlinsetTest =`INSERT INTO bananos_db.invoices (userId, invoiceDate, grandtotal, invocieNumber, shipingAddress, status) 
  VALUES (8, '${invoiceDate}', '450000', '${invNumber}', '23, Jl. Bukit hijau 13 blok c2/ 23', '1')`
  
  // ambil totalnya dulu
  dbs.query(sqlinsetTest, (err, result)=>{
    if (err) throw err;
    res.status(200).send("successfully create invoice");
    // res.send(result);
    // console.log("masuk");
  });

  //kalo udah masukin ke variable, abis itu baru di insert into table invoice
  //abis invoice nya udh kebuat, bikin invocie detail pake foreach data dari cart sama uabg status dari isDeleted flase jadi true
  
}

exports.showInvoice = (req,res) => {
  
}

exports.showInvoiceDetail = (req, res) => {
  
}

exports.getCategories = (req, res) =>{
  let sql = `SELECT * FROM categories;`
  dbs.query(sql, (err,result)=>{
    if (err) {
      console.log('error'+err);
      res.status(400).send(err);
    }
    res.json(result)
  })
}

