var express = require('express');
var router = express.Router();
var Depense=require('../models/Depenses');

router.get('/:id?',function(req,res,next){
	console.log('routedepense');
	if(req.params.id){
		console.log('routedepenseid');
		Depense.getDepenseById(req.params.id,function(err,rows){
			if(err)
			{
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	 }
	 else{
		 console.log('routedepenseall');
		Depense.getAllDepenses(function(err,rows){
			if(err)
			{
				res.json(err);
			}
			else
			{
			  res.json(rows);
			}
			 
		});
	}
});

router.post('/',function(req,res,next){
	console.log('postok');
	Depense.addDepense(req.body,function(err,count){
		if(err)
		{
			res.json(err);
		}
		else{
			res.json(req.body);//or return count for 1 &amp;amp;amp; 0
		}
	});
});

router.delete('/:id',function(req,res,next){
	Depense.deleteDepense(req.params.id,function(err,count){
		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(count);
		}
	});
});

router.put('/:id',function(req,res,next){
	Depense.updateDepense(req.params.id,req.body,function(err,rows){
		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(rows);
		}
	});
});

module.exports = router;
