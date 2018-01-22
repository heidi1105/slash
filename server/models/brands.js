module.exports=(sequelize, DataTypes)=>{
	var brands = sequelize.define('brands',{
	name:{type:DataTypes.STRING(100), allowNull:false},
//	pic_url:{type:DataTypes.STRING(100)},
	desc:{type:DataTypes.TEXT},
	region: {type:DataTypes.STRING(45)}
})

	brands.associate=function(models){
		models.brands.hasMany(models.products, {foreignKey: 'brandId'})

	}

	return brands;

}


