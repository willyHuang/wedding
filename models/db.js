var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config.option);

var db        = {};

//確認是否有連上db
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "db.js");
 })
.forEach(function(file) {
	var model = sequelize.import(path.join(__dirname, file));
	db[model.name] = model;
});

//設定關聯
Object.keys(db).forEach(function(modelName) {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;



//create table 
//User.sync({force:true}); //{force:true} 如果表已經存在,刪掉本來的重建

//create a record
/*
User.create({Name:'willy', Age:18}, {raw:true}).then(function(user){
	console.log(user.get({plain:true}))
})*/

//find record(s)
/*
User.findById(1, {raw:true}).then(function(user){
	console.log(user)
});

User.findAll({raw:true}).then(function(users){
	console.log(users);
});

User.findOne({
	where:{
		Age:{
			$or:{
				$gt:15,
				$lt:10
			}
		}
	}, raw:true
}).
then(function(user){
	console.log(user);
});
*/

//update record(s)
/*
User.update({
	Name:'willy222'
}, 
{	
	where:{
		Name:'willy'
	}
})
.then(function(num){
	console.log(num);
})*/

//delete record
/*
User.destroy({
	where:{
		Age:null
	},

}).then(function(num){
	console.log(num);
});
*/ 
