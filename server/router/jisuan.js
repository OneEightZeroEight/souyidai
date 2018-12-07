var request = require('request')
const express = require('express')
const Router  = express.Router()

Router.get('/getres',(req,res)=>{
      request.post({
          url:'https://m.souyidai.com/invest/calculator/receipt',
          form: {
            bidId: 4667770335075,
            amount: 10000,
            productType: 'ztb'}}, 
            function(err,response,body){
            console.log(err)  
            console.log(body);
            res.send(body)
          })
          
      
})

module.exports =Router;