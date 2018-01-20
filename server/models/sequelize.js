let Sequelize = require('sequelize');

let sequelize = new Sequelize('slash', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// let 


// const Test2 = sequelize.define('test2', {
//     firstName: {
//       type: Sequelize.STRING
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
// });
// Test2.drop();

// Test2.sync({force: true})






