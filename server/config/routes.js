let User = require('./../controllers/users')
let path= require('path')


module.exports = (app)=>{
	app.get('/', User.home);

	app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    });

}