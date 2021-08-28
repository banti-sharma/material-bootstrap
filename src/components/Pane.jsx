import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from "./Component";

export default class Pane extends Component {
	render() {
		const classes = this.getPtClassSet();
		classes.sidebar = this.props.sidebar;
		const className = classNames(this.props.className, classes);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
}

Pane.propTypes = {
	sidebar: PropTypes.bool
};

Pane.defaultProps = {
	ptClass: 'pane',
	sidebar: false
};
