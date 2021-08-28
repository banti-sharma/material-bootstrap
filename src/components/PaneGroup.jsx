import React from 'react';
import PropTypes from 'prop-types';

export default class PaneGroup extends React.Component {
	render() {
		return (
			<div className="pane-group">
				{this.props.children}
			</div>
		);
	}
}

PaneGroup.propTypes = {
	children: PropTypes.node
};
