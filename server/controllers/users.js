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

	getCurrentUser:(req, res)=>{
		console.log("controllers/getting current user")
		res.json(true);
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

	getProducts:(req, res)=>{
		console.log("controllers/getting products")
		models.sequelize.query("SELECT p.id as id, p.name as name, p.price as price, p.thumbnail as thumbnail, b.id as brandId, b.name as brandName FROM products p INNER JOIN brands b ON b.id = p.brandId"
			,{ bind: ['active'], type: models.sequelize.QueryTypes.SELECT })
		.then((products, err)=>{
			if(err){
				console.log("err" + err)

			}else{
				res.json(products)
			}
		})
	},

	getOneProduct:(req, res)=>{

		console.log("controllers/getting product"+req.params.id)
		models.products.findOne({
			where: {id:req.params.id},
			raw:true
		})
		.then((products, err)=>{
			if(err){
				console.log("err" + err)

			}else{
				res.json(products)
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
	},

	getCart:(req, res)=>{
		console.log("controllers/getCart1")
		if (!req.session.order){
			console.log("creating session.order")
			req.session.order=[];
		}else{
			console.log("controllers/getCart2")
			console.log(req.session.order)
			res.json(req.session.order)
		}
	},

	getCartDetails:(req, res)=>{
		console.log("controllers/getCart1")
		var order = req.session.order;
		if (!req.session.order){
			console.log("creating session.order")
			req.session.order=[];
			res.json([]);
		}else{
			console.log("controllers/getCart2")

			var orderList ="";
			for (var i=0; i<order.length; i++){
				orderList += " p.id = "+ order[i].productId
				if (order[i+1]){
					orderList+=" or "
				}
			}


			console.log("orderList "+ orderList)

		models.sequelize.query("SELECT p.id as id, p.name as name, p.price as price, p.thumbnail as thumbnail, b.id as brandId, b.name as brandName FROM products p INNER JOIN brands b ON b.id = p.brandId where "+orderList
			,{ bind: ['active'], type: models.sequelize.QueryTypes.SELECT })
		.then((products, err)=>{
			if(err){
				console.log("err" + err)
				res.json([])
			}else{
				console.log("else in models.sequelize")
				for (var j=0; j<products.length; j++){
					console.log(order)
					for (var k=0; k<order.length;k++){
						if (products[j].id == order[k].productId){
							console.log("added product"+products[j].id)
							products[j].quantity= order[k].quantity
						}
					}
				}
				console.log(products)
				res.json(products)

			}
		})

			// console.log("outside loop")
			// res.json([])
		}
	},


	addItem:(req, res)=>{
		let order=[];
		if (!req.session.order){
			req.session.order=[]
		}
		order=req.session.order;

		for (var i =0; i<order.length; i++){
			if (order[i]["productId"]===req.body.productId){
				order[i]["quantity"]=order[i]["quantity"]+req.body.quantity;
				req.session.order=order;

				res.json(order)
			}
		}
		order.push(req.body);
		req.session.order=order;
		res.json(order)
	},

	updateItem: (req, res)=>{
		var order=[];
		if(!req.session.order){
			req.session.order=[];
		}
		order=req.session.order;

		for(let i = 0; i<order.length; i++){
			order[i]["quantity"]= req.body.quantity;
			req.session.order=order;

			res.json(order)
			}
			// order.push(req.body);
			// req.session.order=order;
			// res.json(order)
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
