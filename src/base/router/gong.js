const express=require('express');
const Router=express.Router();
const db = require('../model/db.js')
//数据模型引入
const Goods=require('../model/denglu.js')
// 
// app.all('*', function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By",' 3.2.1')
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// });
//添加账号密码
Router.post('/addGoods',(req,res)=>{
	//1.接收数据
	let {phone,name} = req.body
	Goods.insertMany({phone,name})
	.then((data)=>{
		res.send({err:0,msg:'添加成功',data:null})
	})
	.catch((err)=>{
		console.log(err)
		res.send({err:-1,msg:'添加失败',data:null})
	})
})
//登录验证
Router.post('/dengluGoods',(req,res)=>{
	let {phone,name}= req.body;
	let phones= req.body.phone;
	let names= req.body.name;

	Goods.findOne({phone:phones})
	.then((data)=>{
		if(data.name == names){
			console.log(data.name)
			res.send({err:0,msg:'密码匹配',data:null})
		}else{
			console.log(data)
			res.send({err:1,msg:'密码不匹配',data:null})
		}
	})
	.catch((err)=>{
		console.log(err)
		res.send({err:-1,msg:'登录失败',data:null})
	})
})




//电话重复查询
Router.post('/findGoods',(req,res)=>{
	let name= req.body;
	console.log(req.body)
	db.query(function(db) {
			db.collection("denglus").find(req.body).toArray(function(err, result) {
				console.log(result.length)
				if (result.length <= 0) {
					console.log(66555)
					res.send({err:0,msg:'没有',data:null})
				}else if(result.length > 0) {
					console.log(66)
					res.send({err:-1,msg:'有',data:null})
				}
			})
		
				
	})
})



module.exports=Router;