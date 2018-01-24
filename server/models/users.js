module.exports=(sequelize, DataTypes)=>{
	let users = sequelize.define('users', {
	email: {type:DataTypes.STRING(100), allowNull:false, unique:true},
	firstName: {type:DataTypes.STRING(45)},
	lastName: {type:DataTypes.STRING(45)},
	password: {type:DataTypes.STRING},
	fb: {type:DataTypes.STRING}
})
	return users;
}