let User = require('./../controllers/users')
let path= require('path')


module.exports = (app)=>{
	app.get('/', User.home);
	app.get('/login', User.login);
	app.post('/createBrand', User.createBrand);
	app.get('/getBrands', User.getBrands);
	app.post('/createProduct', User.createProduct);
	app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    });

}