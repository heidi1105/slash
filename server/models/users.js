module.exports=(sequelize, DataTypes)=>{
	let users = sequelize.define('users', {
	email: {type:DataTypes.STRING(100), allowNull:false, unique:true},
	firstName: {type:DataTypes.STRING(45), allowNull:false},
	lastName: {type:DataTypes.STRING(45), allowNull:false},
	password: {type:DataTypes.STRING, allowNull:false},
	fb: {type:DataTypes.STRING}
})
	return users;
}