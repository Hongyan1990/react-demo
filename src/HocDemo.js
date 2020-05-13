import React, {Component} from 'react';

const MyContainer = (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				value: ''
			};
			this.handleChange = this.handleChange.bind(this);
		}

		handleChange(e) {
			this.setState({
				value: e.target.value,
			})
		}

		render() {
			const newProps = {
				name: {
					value: this.state.value,
					onClick: this.handleChange
				}
			}
			return (
				<WrappedComponent {...this.props} {...newProps} />
			)
		}
	}
}

@MyContainer
class MyComponent extends Component {
	render() {
		return <input type="text" {...this.props} />
	}
}

export default MyComponent
