var fs= require('fs');
var path=require('path');
// let Sequelize = require('sequelize');
// var db        = {};


// let sequelize = new Sequelize('slash', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

var models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>=0){
		require(models_path + '/' +file);
	}
})

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;



// module.exports = {
//   development: {
//     dialect: "mysql",
//     storage: "./db.development.mysql"
//   },
//   test: {
//     dialect: "mysql",
//     storage: ":memory:"
//   },
//   production: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOSTNAME,
//     dialect: 'mysql',
//   }
// };


