let session = require('express-session');
let config = {secret:"SlashIsTheBest"};
let express = require('express');
let models = require('../models');




module.exports={
	createBrand:(req, res)=>{
		console.log("controllers/createBrand");
		models.brands.create({
			name: req.body.name,
			desc: req.body.desc,
			region: req.body.region
		}).then(function() {   	 
  		});
		res.json(true);
	},

	createProduct:(req, res)=>{
		console.log("controllers/createProduct");

		models.products.create({
			name:req.body.name,
			desc:req.body.desc,
			price:req.body.price,
			brandId: req.body.brandId,
			categoryId: req.body.categoryId,
			thumbnail:req.body.thumbnail
		}
		).then(function(record) {
    	 })
  	
		res.json(true);
	},
	
	createCategory:(req, res)=>{
		console.log("controllers/createCategory");
		models.categories.create({
			name: req.body.name,
		}).then(function() {   	 
  		});
		res.json(true);
	},	

	uploadFile:(req, res)=>{
		console.log("uploading")
		res.json(true)
	},

	uploadPicUrl:(req, res)=>{
		models.products_pic.create({
			pic_url: req.body.pic_url,
			pic_alt: req.body.pic_alt
		}).then(function(){})
		res.json(true);
	}

}

