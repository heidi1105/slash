let session = require('express-session');
let config = {secret:"SlashIsTheBest"};
let express = require('express');
let models = require('../models');


//let models = require('./models');


module.exports={
	home:(req, res)=>{//		console.log(Sequelize.models.products);
		console.log("here in home");
		res.json(true)
	},


	login:(req, res)=>{
		console.log("in login");
		res.json(true)
	},

	// createBrand:(req, res)=>{
	// 	console.log("controllers/createBrand");

	// 	models.brands.create({
	// 		name: req.body.name,
	// 		desc: req.body.desc,
	// 		region: req.body.region
	// 	}).then(function() {   	 
 //  		});
	// 	res.json(true);
	// },

	getBrands:(req, res)=>{
		console.log("controllers/getting brands")
		models.brands.findAll({
//			include:[{model:models.brands}],
			raw:true
		}).then((brands, err)=>{
			if(err){
				console.log("err" + err)

			}else{
				res.json(brands)
			}		
		})
	},

	getCategories:(req, res)=>{
		console.log("controllers/getting categories")
		models.categories.findAll({
//			include:[{model:models.categories}],
			raw:true
		}).then((categories, err)=>{
			if(err){
				console.log("err" + err)

			}else{
				console.log(categories)
				res.json(categories)
			}		
		})
	}
}



		// models.brands.findAll({
		// 	attributes:['id', 'name'], raw:true
		// }).then((err, brands)=>{
		// 	console.log("getting brands")
		// 	if(err){
		// 		console.log(err)
		// 	}else{
		// 		console.log(brands);
		// 		res.json(brands)
		// 	}		
		// })

// 	},


// 	createProduct:(req, res)=>{
// 		console.log("controllers/createProduct");
// 		console.log(req.body)
// 		models.products.create({
// 			name:req.body.name,
// 			desc:req.body.desc,
// 			price:req.body.price,
// 			brandId: req.body.brandId
// 		}
// 		).then(function(record) {
// //			console.log(record)
//     	 		})
  	
// 		res.json(true);
// 	},
	



