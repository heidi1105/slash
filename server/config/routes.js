let User = require('./../controllers/users')
let Admin = require('./../controllers/admin')
let path= require('path')
let multer = require('multer');
let upload = multer({dest:'upload/'})

module.exports = (app)=>{
	app.get('/', User.home);
	app.get('/login', User.login);
	app.post('/createBrand', Admin.createBrand);
	app.get('/getBrands', User.getBrands);
	app.post('/createCategory', Admin.createCategory);
	app.get('/getCategories', User.getCategories);
	app.post('/createProduct', Admin.createProduct);

	app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    });

}