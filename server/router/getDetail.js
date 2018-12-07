var request = require('request')
const express = require('express')
const Router  = express.Router()

Router.get('/getdetail',(req,res)=>{
    request('https://m.souyidai.com/1.1/bid/detail/3028769225935/ztb?from=wap', function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body); 
        res.send(body)
      });
      



})

module.exports =Router;