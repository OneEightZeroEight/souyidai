 //创建数据模型,就是创建数据库的键值
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let goodsSchema=new Schema({
 	phone:{type:Number,required:true},
 	name:{type:String,required:true}

 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let goods=mongoose.model('denglus',goodsSchema);

module.exports=goods
//抛出数据模型