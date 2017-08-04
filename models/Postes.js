var db=require('../dbconnection'); //reference of dbconnection.js
 
var Poste={
	getAllPostes:function(callback){
		return db.query("Select * from poste",callback);
	},
	getPosteById:function(id,callback){ 
		return db.query("select * from poste where idposte=?",[id],callback);
	},
	addPoste:function(Poste,callback){
		console.log(Poste);
		return db.query("Insert into poste values(?,?,?,?,?)",[Poste.idposte,Poste.nom],callback);
	},
	deletePoste:function(id,callback){
		return db.query("delete from poste where idposte=?",[id],callback);
	},
	updatePoste:function(id,Poste,callback){
		return db.query("update poste set nom=? where idposte=?",[Poste.nom,id],callback);
	}
};
 module.exports=Poste;