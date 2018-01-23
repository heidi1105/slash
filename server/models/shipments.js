module.exports=(sequelize, DataTypes)=>{
	let shipments = sequelize.define('shipments', {
	address: {type:DataTypes.STRING(255), allowNull:false},
	region: {type:DataTypes.STRING(45), allowNull:false},
	receiver_name: {type:DataTypes.STRING(45), allowNull:false},
	shipment_code: {type:DataTypes.STRING(45)},
	message: {type:DataTypes.TEXT},
	order_date :{type: DataTypes.DATE},
	deliver_date:{type:DataTypes.DATE},
	payment: {type:DataTypes.STRING(255)}
})


	return shipments;
}