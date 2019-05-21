const dbs =require('../config/dbMysql');

// const Product = db.product;
// const Color = db.color_master;


// const Op = db.Sequelize.Op;

exports.getProduct = (req,res)=>{
  var sql = `select p.id as productId, pd.id as pdid, p.nama, c.nama as category, pd.price, pd.stock, cm.nama as warna, s.nama as size 
  from product_details pd
  join color_masters cm on cm.id = pd.colorId	
  join sizes s on s.id = pd.sizeId
  join products p on p.id = cm.productId
  join categories c on c.id = p.categoryId`;

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
  var sql = `SELECT cr.userId, p.nama as product, cr.qty, pd.price, s.nama as size, cm.img1
  FROM carts cr
  join product_details pd on pd.id = cr.productDetailId
  join color_masters cm on cm.id = pd.colorId
  join sizes s on s.id = pd.sizeId
  join products p on p.id = cm.productId
  where cr.userId = ${id}`

  dbs.query(sql, (err, result)=>{
    res.send(result);
    if (err) {
      console.log(sql + " " + err)  
    };
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
  dateTime = new Date(time);

  const day = dateTime.getDate();
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  const code = dateTime.getMilliseconds();
  const code2 = dateTime.getSeconds();
  const invoiceDate = `${day}/${month}/${year}`;
  const invNumber = `INV-${invoiceDate}-${code}${code2}`;
  // const grandTotal
  var sqlGetTott = 
  `SELECT SUM(pd.price * c.qty) as total FROM carts c
  join product_details pd on pd.id = c.productDetailId
  where c.userId = ${userId}
  and c.isDeleted = false
  group by c.id
  order by SUM(pd.price * c.qty) DESC;`;
  // ambil totalnya dulu
  dbs.query(sqlGetTott, (err, result)=>{
   
  });

  //kalo udah masukin ke variable, abis itu baru di insert into table invoice
  //abis invoice nya udh kebuat, bikin invocie detail pake foreach data dari cart sama uabg status dari isDeleted flase jadi true
  
  
  
}

exports.showInvoice = (req,res) => {
  
}

exports.showInvoiceDetail = (req, res) => {
  
}

