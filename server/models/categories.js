module.exports=(sequelize, DataTypes)=>{
	let categories = sequelize.define('categories',{
	name :{type:DataTypes.STRING(45), allowNull:false}
})
	categories.associate=function(models){
		models.categories.hasMany(models.products, {foreignKey: 'categoryId'})	
	}

	return categories;
}