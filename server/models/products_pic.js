module.exports=(sequelize, DataTypes)=>{
	let products_pic = sequelize.define('products_pic', {
	img_url:{type: DataTypes.STRING(100), allowNull:false},
	img_alt:{type: DataTypes.STRING},	
})

	products_pic.associate=function(models){
	models.products_pic.belongsTo(models.products, {
		onDelete: "CASCADE"})
	}

	return products_pic;
}
