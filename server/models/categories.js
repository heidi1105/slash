module.exports=(sequelize, DataTypes)=>{
	let categories = sequelize.define('categories',{
	name :{type:DataTypes.STRING(45), allowNull:false}
})
	return categories;
}