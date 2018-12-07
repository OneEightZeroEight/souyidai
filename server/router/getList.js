var request = require('request')
const express = require('express')
const Router  = express.Router()

Router.get('/getzt',(req,res)=>{
    // request('', function (error, response, body) {
    //     console.log('error:', error); 
    //     console.log('statusCode:', response && response.statusCode); 
    //     console.log('body:', body); 
    //     res.send(body)
    //   });
    
     
      request.post({
          url:'https://m.souyidai.com/wap/1.6/bid/hulilist',
          form: {
              huliProductType:'P2P',
              subIndex: 'ztb',
              pageNo: 1,
              orderBy: 'DEFAULT'
            }}, 
          function(err,response,body){
            console.log(err)  
            console.log(body);
            res.send(body)
           
          })
          
      
})

module.exports =Router;