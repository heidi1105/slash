module.exports=(sequelize, DataTypes)=>{
let orders = sequelize.define('orders', {
	region:{type:DataTypes.STRING(45), allowNull:false},
	prcode:{type:DataTypes.STRING(45)},	
	price:{type:DataTypes.DECIMAL(10,2)},
	email:{type:DataTypes.STRING(100)}
})

	orders.associate=function(models){
	models.orders.hasOne(models.shipments);
	models.orders.belongsTo(models.users);
	models.orders.hasMany(models.order_items);		
	}


	return orders;
}
