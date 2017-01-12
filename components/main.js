var React = require("react");
var ReactDOM = require("react-dom");

var Main = React.createClass({

	render:function(){
		return(
				<div id="main">
					<div id="mainHeader">This is todo list</div>
					<div id="inputTodo">
						<input type="text" placeholder="请输入任务"/>
					</div>
					<div id="spaceHd"></div>
					<div id="mainFooter">
						<div><input type="checkbox" />全选</div>
						<div id="todosNum">已完成/全部</div>
						<div id="dltAll"><input type="butotn" value="清除全部"/></div>
					</div>
				</div>
			)
	}
})

module.exports = Main;