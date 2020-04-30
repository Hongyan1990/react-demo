import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default class Tabs extends Component {
	static propTypes = {
		defaultActiveIndex: PropTypes.number,
		onChange: PropTypes.func,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		])
	};
	static defaultProps = {
		onChange: () => {}
	};
	constructor(props) {
		super(props);
		let activeIndex = props.defaultActiveIndex;
		this.state = {
			activeIndex
		}
		this.handleTabChange = this.handleTabChange.bind(this);
	}

	handleTabChange(index) {
		console.log(index)
		if(index !== this.state.activeIndex) {
			this.setState({activeIndex: index});
			this.props.onChange(index);
		}
	}

	getTabsNav() {
		return (
			<TabsNav 
				activeIndex={this.state.activeIndex}
				onChange={(index) => this.handleTabChange(index)}
				panes={this.props.children}  />
		)
	}

	getTabsContent() {
		return (
			<TabsContent 
				activeIndex={this.state.activeIndex}
				panes={this.props.children} />
		)
	}

	render() {
		return (
			<div>
				Tabs{this.state.activeIndex}
				{this.getTabsNav()}
				{this.getTabsContent()}
			</div>
		)
	}
}

export class TabPane extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div role="tabpane" className={this.props.isActive?'pane-active':'pane-hidden'} >
				{this.props.children}
			</div>
		)
	}
}

class TabsNav extends Component {
	constructor(props) {
		super(props);
	}
	getTabs () {
		const {panes, activeIndex} = this.props;
		return React.Children.map(panes, child => {
			if(!child) {
				return null;
			}
			const order = parseInt(child.props.order, 10);
			const classes = order === activeIndex ? 'active': '';
			const events = {
				onClick: this.props.onChange.bind(this, order)
			};
			const ref = {};
			if(order === activeIndex) {
				ref.ref = 'activeTab'
			}
			return (
				<li 
					role="tab"
					className={classes}
					{...events}
					{...ref}
					key={order}>
					{child.props.tab}
				</li>
			)
		})
	}

	render() {
		return (
			<div role="tablist">
				<ul>
					{this.getTabs()}
				</ul>
			</div>
		)
	}
}

class TabsContent extends Component {
	getContens() {
		const {activeIndex, panes} = this.props;
		return React.Children.map(panes, child => {
			if(!child) {
				return null;
			}
			const order = parseInt(child.props.order, 10);
			const isActive = order === activeIndex;
			return React.cloneElement(child, {
				isActive,
				children: child.props.children,
				key: `tabpane-${order}`
			})
		})
	}
	render() {
		return (
			<div>
				{this.getContens()}
			</div>
		)
	}
}

