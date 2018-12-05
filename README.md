#### 创建路由完成（陆）

#### 首页页面完成（陆）

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

### 在写函数式结构时又忘记加括号

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
	
### withRouter与react-router-redux一起使用解决抛出的问题

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