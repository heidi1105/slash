var fs= require('fs');
var path=require('path');
var basename  = path.basename(__filename);
var Sequelize = require('sequelize');
var db        = {};


let sequelize = new Sequelize('slash', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

var models_path = path.join(__dirname, '../models');

let models = [

	'brands', 'products'
//	, 'orders','order_items','categories', 'products_pic', 'promotions', 'restrictions', 'shipments', 'users'
	]
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

module.exports.sequelize = sequelize;



// var models_path = path.join(__dirname, '../models');

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;