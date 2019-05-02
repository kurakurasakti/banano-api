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
	app.post('/api/auth/register', [verifySignUp.checkDuplicateUserNameOrEmail], userController.signup);

	app.post('/api/auth/login', userController.signin);

	app.get('/api/test/user', [authJwt.verifyToken], userController.userContent);

	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], userController.managementBoard);

	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);

	app.get('/api/admin/getUser', [authJwt.verifyToken, authJwt.isAdmin], adminController.getUser);

	//products
	app.get('/api/product', productController.getProduct);

	app.get('/api/product/:id', productController.getProductDetail);
	
	//cart 
	app.get('/api/cart/', authJwt.verifyToken, productController.showCart);

	app.post('/api/addCart/', authJwt.verifyToken, productController.showCart);


}