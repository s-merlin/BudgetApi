var db=require('../dbconnection'); //reference of dbconnection.js
 
var User={
	getAllUsers:function(callback){
		return db.query("Select * from user",callback);
	},

	getUserById:function(id,callback){ 
		return db.query("select * from user where iduser=?",[id],callback);
	},
	addUser:function(User,callback){
		console.log(User);
		return db.query("Insert into user values(?,?,?,?,?)",[User.iduser,User.login,User.password,User.email,User.role],callback);
	},
	deleteUser:function(id,callback){
		return db.query("delete from user where iduser=?",[id],callback);
	},
	updateUser:function(id,User,callback){
		return db.query("update user set login=?,password=?,email=?,role=? where iduser=?",[User.login,User.password,User.email,User.role,id],callback);
	},
	getUser:function(email,password,callback){
		console.log('in'+email+'-'+password);
		return db.query("select * from user where email=? and password=?",[email,password],callback);
	}
 
};
 module.exports=User;