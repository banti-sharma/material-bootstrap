import React from 'react';
import PropTypes from 'prop-types';

export default class Window extends React.Component {
	render() {
		return (
			<div className="window">
				{this.props.children}
			</div>
		);
	}
}

Window.propTypes = {
	children: PropTypes.node
};
