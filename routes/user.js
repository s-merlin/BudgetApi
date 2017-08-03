var express = require('express');
var router = express.Router();
var User=require('../models/Users');

router.get('/:id?',function(req,res,next){
	console.log('routeuser');
	if (req.query.email && req.query.password){
		console.log('routeuser1');
		User.getUser(req.query.email,req.query.password,function(err,rows){
			if(err) res.json(err);
			else res.json(rows);
		});
	}
	else if(req.params.id){
		console.log('routeuser2');
		User.getUserById(req.params.id,function(err,rows){
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
		 console.log('routeuser3');
		User.getAllUsers(function(err,rows){
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
	User.addUser(req.body,function(err,count){
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
	User.deleteUser(req.params.id,function(err,count){
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
	User.updateUser(req.params.id,req.body,function(err,rows){
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
