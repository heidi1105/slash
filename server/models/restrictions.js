module.exports=(sequelize, DataTypes)=>{
	let restrictions = sequelize.define('restrictions', {
	region:{type: DataTypes.STRING(45), allowNull:false},
})
	restrictions.associate=function(models){
		models.restrictions.belongsTo(models.products)
	}

	return restrictions;
}
