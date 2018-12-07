const express = require('express')
const app  = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('./public'))

const detail_router = require('./router/getDetail.js')
const list_router = require('./router/getList.js')
const calc_router = require('./router/jisuan.js')

app.listen(3003,(err)=>{
	if(err){throw err};
	console.log('3003 port alread 开启');
})

app.all('*', function(req, res, next) {
	            res.header("Access-Control-Allow-Origin", "*");
	            res.header("Access-Control-Allow-Headers", "X-Requested-With");
	            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	            res.header("X-Powered-By",' 3.2.1')
	            res.header("Content-Type", "application/json;charset=utf-8");
	            next();
});

app.use('/detail',detail_router);
app.use('/list',list_router);
app.use('/calc',calc_router);