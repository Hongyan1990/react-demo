import React, {Component} from 'react';

class ThemedButton extends Component {
	render() {
		const props = this.props;
		return <button {...props} />
	}
}

export default ThemedButton