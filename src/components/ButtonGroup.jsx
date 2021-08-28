import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonGroup extends React.Component {
	render() {
		return (
			<div className="btn-group">
				{this.props.children}
			</div>
		);
	}
}

ButtonGroup.propTypes = {
	children: PropTypes.node
};
