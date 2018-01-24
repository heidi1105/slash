module.exports=(sequelize, DataTypes)=>{
	var products = sequelize.define('products', {
	name :{type: DataTypes.STRING(100), allowNull:false},
	desc :{type: DataTypes.TEXT},
	inventory :{type: DataTypes.INTEGER, allowNull:false, defaultValue: 1000},
	price :{type: DataTypes.DECIMAL(6,2), allowNull:false},
	})
	products.associate=function(models){
	models.products.belongsTo(models.brands, {
		onDelete: "CASCADE"}),
	models.products.belongsTo(models.categories, {
		onDelete: "CASCADE"}),

	models.products.hasMany(models.products_pic),
	models.products.hasMany(models.restrictions),
	models.products.hasMany(models.order_items)


	}
	return products;
}