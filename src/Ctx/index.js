import React, {Component} from 'react';
import {ThemeContext} from '../theme-context';

class ThemedButton extends Component {
	static contextType = ThemeContext;

	render() {
		return (
			<Button {...this.props} theme={this.context}></Button>
		)
	}
}

function Button(props) {
	return  <button {...props} style={{backgroundColor: props.theme.background}}></button>
}

export default ThemedButton;