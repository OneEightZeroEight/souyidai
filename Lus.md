#### 首页页面完成

1.头部Logo部分使用滚动条监听触发事件，实现滚动条距离改变渲染

2.头部账号部分使用localStorage缓存使其在刷新不会丢失，并使用redux进行跨组件传参

3.头部点击箭头出现"安全退出",退出则删除localStorage缓存后数据改变跟着实例化改变从而视图改变进行部分页面更新

4.轮播图部分使用蚂蚁金服ui组件库实现轮播

5.下载APP与注册部分判断是否登录状态，呈现不一样的页面内容，通过判断localStorage是否存在进行判断

其他功能尚未完善

#### 创建路由完成

#### 登录注册完成

1.一堆登状态判断+后端node.js+mongodb实现

判断较为复杂不进行一一阐述

### 1.点击跳转路由

```js
引入
	import { withRouter   } from 'react-router-dom'
	
	结尾处与withRouter挂钩
	export default withRouter(FoxM);
```
```js
	fangfa(){
		this.props.history.push('/mine')
	}
```
### 2.判断语句要写完整

```js
	<li className="promptText">
		{
			(()=> {
				if(this.state == true){
					console.log(this.state)
					return (
						<p>&nbsp;dsds</p>
					)
				}else if(this.state == false){
					console.log(this.state)
					return (
						<p>用户名或者密码错误 </p>
					)
				}else{
					console.log(6666)
				}
			})()
		}
		
	</li>
	
	最后的else{}不能少
```

### 3.在写函数式结构时又忘记加括号

```js
	{
		(()=> {
			if(this.state.zhanghao === true){
				return (
					<p>&nbsp;</p>
				)
			}else if(this.state.zhanghao === false){
				return (
					<p style={{color: "#ff5757"}}>用户名或者密码错误 </p>
				)
			}else{console.log("无效")}
		})()
	//千万记得这里有个括号
	}
```
否则报警告，报警告代码无法执行
	index.js:1452 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
	
### 4.withRouter与react-router-redux一起使用解决抛出的问题

```js
	export default withRouter(Section)
		connect((state) => {
			return state
		},(dispatch) => {
			return {
				
			}
		});
	
```
就是withouter是需要包住那个抛出的组件，
好像你用connect之后就变成单词不是组件了

### 5.用true、false的方法判断能否登录效果

### 6.配合componentDidMount生命周期可以进入组件时直接执行函数

```js
	componentDidMount(){
		this.cunchu();
	}
```

### 7.生命周期

```js
渲染前执行
	componentDidMount(){
		this.createCode();
	}
```

```js
渲染后执行
	componentWillMount(){
		this.createCode();
	}
```

### 8.style嵌套函数方式

```js
	style={{
		"position":"fixed",
		"top": "84px",
		"display":this.props.isShowNav?"block":"none"
	}}>
```

### 9.input失去与获得焦点

```js
	<input onFocus={this.huode.bind(this)} onBlur={this.shiqu.bind(this)} />
```

```js
	//获得焦点
	huode(){
		this.setState({
				chuxian: true
		})
	}
	//失去焦点
	shiqu(){
		this.setState({
				chuxian: false
		})
	}
```

### 10.解决自身跨域问题

```js
//解决跨域
	app.all('*', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By",' 3.2.1')
		res.header("Content-Type", "application/json;charset=utf-8");
		next();
	});
```


# 问题：
### 1.当滚动条被触发后组件被重复加载


### 2.登录密码判断时需要点击两次才能进行判断
