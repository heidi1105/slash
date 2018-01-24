let User = require('./../controllers/users')
let Admin = require('./../controllers/admin')
let path= require('path')
let multer = require('multer');
let upload = multer({dest:'upload/'})

module.exports = (app)=>{
	app.get('/', User.home);
	app.get('/api/ogin', User.login);
	app.post('/api/createBrand', Admin.createBrand);
	app.get('/api/getBrands', User.getBrands);
	app.post('/api/createCategory', Admin.createCategory);
	app.get('/api/getCategories', User.getCategories);
	app.post('/api/createProduct', Admin.createProduct);

	app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    });

}