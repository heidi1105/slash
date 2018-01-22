module.exports=(sequelize, DataTypes)=>{
	let promotions = sequelize.define('promotions', {
	prcode: {type:DataTypes.STRING(45), allowNull:false, unique:true},
	discount: {type:DataTypes.DECIMAL(4,4), allowNull:false}
	//discount > 1 : the discount will be the new price of the product
	//discount < 1 : the discount will be the %
})
	return promotions;
}



