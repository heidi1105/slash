module.exports=(sequelize, DataTypes)=>{
	let restrictions = sequelize.define('restrictions', {
	region:{type: DataTypes.STRING(45), allowNull:false},
})
	return restrictions;
}
