import React, {Component} from 'react';
import Tabs, {TabPane} from './Tabs'
// <Tabs classPrefix={'tabs'} defaultActiveIndex={0}>
// 	<TabPane key={0} tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
// 	<TabPane key={1} tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
// 	<TabPane key={2} tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
// </Tabs>
export default class App extends Component {
	handleClick() {
		console.log('a')
	}
	render() {
		return (
			<div>
				<Tabs defaultActiveIndex={0}>
					<TabPane key={0} order={0} tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
				 	<TabPane key={1} order={1} tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
				 	<TabPane key={2} order={2}  tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
				</Tabs>
				<button onClick={::this.handleClick}>click</button>
			</div>
		)
	}
}