let User = require('./../controllers/users')
let Admin = require('./../controllers/admin')
let path= require('path')
let multer = require('multer');
let upload = multer({dest:'upload/'})

module.exports = (app)=>{
	app.get('/', User.home);
	app.get('/api/login', User.login);
	app.post('/api/createBrand', Admin.createBrand);
	app.get('/api/currentUser', User.getCurrentUser);
	app.get('/api/getBrands', User.getBrands);
	app.get('/api/getProducts', User.getProducts);
	app.get('/api/getProduct/:id', User.getOneProduct);
	app.post('/api/createCategory', Admin.createCategory);
	app.get('/api/getCategories', User.getCategories);
	app.post('/api/createProduct', Admin.createProduct);
	app.get('/api/getCart', User.getCart);
	app.get('/api/getCartDetails', User.getCartDetails);
	app.post('/api/addItem', User.addItem);
	app.post('/api/updateItem', User.updateItem);
	app.post('/api/deleteItem', User.deleteItem);

	app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    });

}
