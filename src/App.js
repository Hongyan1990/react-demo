import React, {Component} from 'react';
import Tabs, {TabPane} from './Tabs';
import Forms from './Forms';
// import ThemedButton from './themed-button';
import ThemedButton from './Ctx';
import ThemeTogglerButton from './theme-toggler-button';
import {ThemeContext, theme} from './theme-context';
import MyComponent from './HocDemo';
// <Tabs classPrefix={'tabs'} defaultActiveIndex={0}>
// 	<TabPane key={0} tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
// 	<TabPane key={1} tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
// 	<TabPane key={2} tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
// </Tabs>

function Toolbar(props) {
	return (
		<div>
			<ThemedButton onClick={props.onToggle}>Toggle</ThemedButton>
		</div>
	)
}

function Context() {
	return (
		<div>
			<ThemeTogglerButton/>
		</div>
	)
}

export default class App extends Component {
	constructor(props) {
		super(props);
		
		this.toggleTheme = () => {
			console.log(12)
			this.setState(state => ({
				theme: state.theme === theme.dark 
					? theme.light : theme.dark
			}))
		}
		this.state = {
			theme: theme.light,
			toggleTheme: this.toggleTheme
		};
	}

	handleClick(e) {
		console.log(e)
	}

	componentDidMount() {
		this.refs.button.addEventListener('click', e => {
			this.handleClick(e)
		})
	}

	componentWillUnmount() {
		this.refs.button.removeEventListener('click');
	}

	handleBtnClick() {
		console.log('themed button')
	}

	handleToggle() {
		this.setState(state => ({
			theme: state.theme === theme.dark 
				? theme.light : theme.dark
		}))
	}

	render() {
		return (
			<div>
				<Tabs defaultActiveIndex={0}>
					<TabPane key={0} order={0} tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
				 	<TabPane key={1} order={1} tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
				 	<TabPane key={2} order={2}  tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
				</Tabs>
				<button onClick={::this.handleClick}>::click</button>
				<br/>
				<button ref="button">nativeEvent</button>
				<Forms />
				{/*<ThemedButton onClick={this.handleBtnClick.bind(this)}>themed button</ThemedButton>*/}
				<Toolbar></Toolbar>
				<ThemeContext.Provider value={this.state.theme}>
					<Toolbar onToggle={this.handleToggle.bind(this)}></Toolbar>
				</ThemeContext.Provider> 
				<ThemeContext.Provider value={this.state}>
					<Context></Context>
				</ThemeContext.Provider>

				<hr/>
				<MyComponent placeholder="xxxx" />
			</div>
		)
	}
}