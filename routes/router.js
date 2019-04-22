const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');


module.exports = function (app) {

	const userController = require('../controllers/userController');
	const productController = require('../controllers/productController');

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
		next();
	});
	//user route
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail], userController.signup);

	app.post('/api/auth/signin', userController.signin);

	app.get('/api/test/user', [authJwt.verifyToken], userController.userContent);

	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], userController.managementBoard);

	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);

	//products
	app.get('/api/product', productController.getProduct);

	app.get('/api/product/:id', productController.getProductDetail);
	
	//cart 
	app.get('/api/cart/', authJwt.verifyToken, productController.showCart);


}