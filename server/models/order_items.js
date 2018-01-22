module.exports=(sequelize, DataTypes)=>{
	let orders = sequelize.define('orders', {
	region:{type:DataTypes.STRING(45), allowNull:false},
	prcode:{type:DataTypes.STRING(45)},	
	price:{type:DataTypes.DECIMAL(10,2)}
})
	return orders;
}