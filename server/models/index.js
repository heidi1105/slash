//var fs= require('fs');
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
	'brands', 'products', 'orders','order_items','categories', 'products_pic', 'promotions', 'restrictions', 'shipments', 'users'
	]
models.forEach(function(model) {
//  module.exports[model] = sequelize.import(__dirname + '/' + model);
  var model = sequelize.import(__dirname + '/' + model)
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});	

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports=db;

// Object.keys(db).forEach(modelName => {
// 	console.log("associate "+modelName)
// 	console.log(db[modelName])
//   if (db[modelName].associate) {
//   	console.log("associate" + modelName)
//     db[modelName].associate(db);
//   }
// });


// db.products = require('../models/products.js')(sequelize, Sequelize);  
// db.brands = require('../models/brands.js')(sequelize, Sequelize);  




// module.exports = db;






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

// 'use strict';

// var fs        = require('fs');
// var path      = require('path');
// var Sequelize = require('sequelize');
// var basename  = path.basename(__filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/dbconfig.js')[env];
// var db        = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

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


