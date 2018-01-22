module.exports=(sequelize, DataTypes)=>{
	let products_pic = sequelize.define('products_pic', {
	img_url:{type: DataTypes.STRING(100), allowNull:false},
	img_alt:{type: DataTypes.STRING},	
})
	return products_pic;
}
