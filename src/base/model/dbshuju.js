//数据库连接，与数据库连接
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/daiyiwang',{useNewUrlParser:true});
//daiyiwang就是要加数据库的名字

let db = mongoose.connection;
//实例化连接对象
db.on("error",function(error){
	console.log("Database connection failure:" + error);
});

db.on ("open",function(){
	console.log("数据库连接成功");
})

db.on ("disconnected",function(){
	console.log("数据库连断开");
})


//获得schema对象
//实例化schema对象schemaobj=new Schema({option})
//option 字段名
// let Schema = mongoose.Schema;
// let userSchema = new Schema({
// 	_id:{type:Number,required:true},
// 	name:{type:String,required:true},
// 	pass:{type:String,required:true}
// })
// //讲schema 对象转化为数据模型  model
// //var Blog = mongoose.model('Blog',blogSchema);
// //var Blog = mongoose.model('数据模型的名字（集合名字）',要转化schema对象);
// let user = mongoose.model('user',userSchema);
// 
// user.insertMany({_id:4,name:'网易',pass:'呵呵呵'})
// .then((data)=>{
// 	console.log(data)
// })
// .catch((err)=>{
// 	console.log(err)
// })
// 
//mongoose 用法和mongod 类似 直接返回promise 对象 查询函数看api文档
