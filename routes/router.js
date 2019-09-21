const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');


module.exports = function (app) {

	const userController = require('../controllers/userController');
	const productController = require('../controllers/productController');
	const adminController = require('../controllers/adminController');

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
		next();
	});
	
	//user route
	app.post('/api/auth/register', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], userController.signup);

	app.post('/api/auth/login', userController.signin);

	app.get('/api/test/user', [authJwt.verifyToken], userController.userContent);

	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], userController.managementBoard);

	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);

	app.get('/api/admin/getUser', [authJwt.verifyToken, authJwt.isAdmin], adminController.getUser);

	app.get('/api/auth/keeplogin/:username', userController.keeplogin);


	//products
	app.get('/api/products', productController.getProduct);

	app.get('/api/product/:id', productController.getProductDetail);

	app.get('/api/categories', productController.getCategories);

	//product detail
	
	app.get('/api/products', productController.getProduct);

	app.get('/api/categories', productController.getCategories);

	
	//cart 
	app.get('/api/cart/', productController.showCart);

	app.post('/api/addCart/', authJwt.verifyToken, productController.addToChart);

	app.post('/tes/checkout/', productController.checkout);

	//ADMIN

	app.get('/admin/manage', adminController.getBrand)

	//MARIN
	//product detail==============

	app.get('/api/productDetail/:id', productController.getListProductDetailById);
	app.get('/api/productDetailSize/:id', productController.getListProductDetailSizeById);

	// app.get('/api/productByCategory/:id', productController.getListProductByCategory);

}









