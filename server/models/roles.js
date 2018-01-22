module.exports=(sequelize, DataTypes)=>{
let roles = sequelize.define('roles', {
	role:{type:DataTypes.STRING(45), allowNull:false}
})
	return roles;
}