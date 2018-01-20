let session = require('express-session');
let config = {secret:"SlashIsTheBest"};
let Sequelize = require('sequelize');

module.exports={
	home:(req, res)=>{
//		console.log(Sequelize.models.products);
		console.log("here in home");
		res.json(true)
	}

	login:(req, res)=>{
		console.log("in login");
	}
}