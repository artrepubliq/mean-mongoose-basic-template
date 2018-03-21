var express = require('express');
var router = express.Router();

Category = require("../models/categories.js");

/* GET home page. */
router.get('/', function(req, res, next) {
	Category.getCategories(function(err, categories){
		if (err) { res.send(err);}
		console.log(categories);
		res.render('index', { title: 'Express', data: categories });
	});
  
});

/* count home page. */
router.get('/count', function(req, res, next) {
	Category.countC({email: 'himakarreddy@hotmail.com', name: 'raja'},function(err, categories){
		if (err) { res.send(err);}
		console.log(categories);
		res.json(categories);
	});
  
});

/* post home page. */
router.post('/add', function(req, res, next) {
	let category = new Category();

	category.name = req.body.name;
	category.email = req.body.email;
  
  	Category.addCategories(category,function(err, category){
  		if (err) { res.send(err);}
  		else {
  			res.redirect("/");
  		}
  	})
});

/* edit home page. */
router.get('/edit/:id', function(req, res, next) {
	
		Category.getCategoryById(req.params.id, function(err, category){
			if (err) {res.send(err);}
			else {
				console.log(category);
				res.render('edit', { title: 'Express', data: category });
			}
		});
		
  
});

/* post edit page. */
router.post('/edit/:id', function(req, res, next) {
	let category = new Category();
	var query = {_id: req.params.id};
	var update = {
		name : req.body.name,
		email : req.body.email
	}
	
  
  	Category.updateCategory(query,update,{},function(err, category){
  		if (err) { res.send(err);}
  		else {
  			res.redirect("/");
  		}
  	})
});

/* post edit page. */
router.get('/delete/:id', function(req, res, next) {
	
	var query = {_id: req.params.id};
	
	
  
  	Category.removeCategory(query,function(err, category){
  		if (err) { res.send(err);}
  		else {
  			res.redirect("/");
  		}
  	})
});

module.exports = router;
