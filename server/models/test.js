// let Sequelize = require('sequelize');

// let sequelize = new Sequelize('slash', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });



// let brands = sequelize.define('brands',{
// 	name:{type:Sequelize.STRING(100), allowNull:false},
// 	desc:{type:Sequelize.TEXT},
// 	region: {type:Sequelize.STRING(45)}
// })


// let products = sequelize.define('products', {
// 	name :{type: Sequelize.STRING(100), allowNull:false},
// 	desc :{type: Sequelize.TEXT},
// 	inventory :{type: Sequelize.INTEGER, allowNull:false, defaultValue: 1000},
// 	price :{type: Sequelize.DECIMAL(6,2), allowNull:false},
// })

// let categories = sequelize.define('categories',{
// 	name :{type:Sequelize.STRING(45), allowNull:false}
// })



// let products_pic = sequelize.define('products_pic', {
// 	img_url:{type: Sequelize.STRING(100), allowNull:false},
// 	img_alt:{type: Sequelize.STRING},	
// })




// let restrictions = sequelize.define('restrictions', {
// 	region:{type: Sequelize.STRING(45), allowNull:false},
// })




// let users = sequelize.define('users', {
// 	email: {type:Sequelize.STRING(100), allowNull:false, unique:true},
// 	firstName: {type:Sequelize.STRING(45), allowNull:false},
// 	lastName: {type:Sequelize.STRING(45), allowNull:false},
// 	password: {type:Sequelize.STRING, allowNull:false},
// 	fb: {type:Sequelize.STRING},
// 	roles: {type:Sequelize.ENUM('users', 'admin','others')}
// })



// let orders = sequelize.define('orders', {
// 	region:{type:Sequelize.STRING(45), allowNull:false},
// 	prcode:{type:Sequelize.STRING(45)},	
// 	price:{type:Sequelize.DECIMAL(10,2)},
// 	email:{type:Sequelize.STRING(100)}
// })


// //orders.sync();

// let order_items = sequelize.define('order_items', {
// 	quantity: {type:Sequelize.INTEGER, allowNull:false, min:0},
// 	prcode: {type:Sequelize.STRING},
// })


// //order_items.sync({force:true});

// let shipments = sequelize.define('shipments', {
// 	address: {type:Sequelize.STRING(255), allowNull:false},
// 	region: {type:Sequelize.STRING(45), allowNull:false},
// 	receiver_name: {type:Sequelize.STRING(45), allowNull:false},
// 	shipment_code: {type:Sequelize.STRING(45)},
// 	message: {type:Sequelize.TEXT},
// 	order_date :{type: Sequelize.DATE},
// 	deliver_date:{type:Sequelize.DATE},
// 	payment: {type:Sequelize.STRING(255)}
// })


// // let roles = sequelize.define('roles', {
// // 	role:{type:Sequelize.STRING(45), allowNull:false}
// // })


// let promotions = sequelize.define('promotions', {
// 	prcode: {type:Sequelize.STRING(45), allowNull:false, unique:true},
// 	discount: {type:Sequelize.DECIMAL(4,4), allowNull:false}
// 	//discount > 1 : the discount will be the new price of the product
// 	//discount < 1 : the discount will be the %
// })

// // let user_roles=sequelize.define('user_roles', {})

// categories.hasMany(products);
// brands.hasMany(products);

// products.belongsTo(categories);
// products.belongsTo(brands);


// products.hasMany(products_pic);
// products.hasMany(restrictions);
// products.hasMany(order_items);

// //products.sync();

// products_pic.belongsTo(products);
// //products_pic.sync();

// restrictions.belongsTo(products);
// //restrictions.sync();

// users.hasMany(order_items);
// users.hasMany(orders);
// //users.sync();

// orders.hasOne(shipments);
// orders.belongsTo(users);
// orders.hasMany(order_items);

// order_items.belongsTo(products);
// order_items.belongsTo(orders);
// order_items.belongsTo(users);
// //shipments.sync();
// // roles.belongsToMany(users, {through:user_roles});
// // users.belongsToMany(roles, {through:user_roles});



// sequelize.sync({force:true})






