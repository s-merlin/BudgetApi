var db=require('../dbconnection'); //reference of dbconnection.js
 
var Depense={
	getAllDepenses:function(callback){
		return db.query("Select * from depense",callback);
	},
	getDepenseById:function(id,callback){ 
		return db.query("select * from depense where iddepense=?",[id],callback);
	},
	addDepense:function(Depense,callback){
		console.log(Depense);
		return db.query("Insert into depense values(?,?,?,?)",[Depense.iddepense,Depense.personne,Depense.poste,Depense.montant],callback);
	},
	deleteDepense:function(id,callback){
		return db.query("delete from depense where iddepense=?",[id],callback);
	},
	updateDepense:function(id,Depense,callback){
		return db.query("update depense set personne=?,poste=?,montant=? where iddepense=?",[Depense.personne,Depense.poste,Depense.montant,id],callback);
	}
};
 module.exports=Depense;