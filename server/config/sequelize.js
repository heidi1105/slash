var fs= require('fs');

var path=require('path');

let Sequelize = require('sequelize');

let sequelize = new Sequelize('slash', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

var models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>=0){
		require(models_path + '/' +file);
	}
})

