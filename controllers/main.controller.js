'use strinct';
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const Applications = require('../models/Applications');

class MainController {

	all(req, res, next) {
		res.json({ message: 'Get All data' });
	}

   async create(req, res, next) {

	   // Create token using jwt sign method 
// By defalut algoritham H256 & expiration time in milisecond 
  jwt.sign({user}, secrettoken, {expiresIn:'300s'},(error, token)=>{
     	res.json({
		token
	});
   })


		let appdata = new Applications({
			name:req.body.name
		});
		let result = await appdata.save();
		console.log(req.body);
		res.json({ message: 'Application creatd', result:result });
	}

	info(req, res, next) {
		res.json({ message: 'Info data' });
	}

	update(req, res, next) {
		res.json({ message: 'Update log data' });
	}

	delete(req, res, next) {
		res.json({ message: 'Delete log data' });
	}



}

module.exports = new MainController();
