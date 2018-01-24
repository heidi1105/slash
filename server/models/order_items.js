module.exports=(sequelize, DataTypes)=>{
	let order_items = sequelize.define('order_items', {
	quantity: {type:DataTypes.INTEGER, allowNull:false, min:0},
	prcode: {type:DataTypes.STRING},
})
	order_items.associate=function(models){
		models.order_items.belongsTo(models.products),
		models.order_items.belongsTo(models.orders),
		models.order_items.belongsTo(models.users)
	}

	return order_items;
}