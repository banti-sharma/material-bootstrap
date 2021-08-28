import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from './Icon.jsx';
import { Component } from "./Component.jsx";

export default class Tab extends Component {
	getIconComponent() {
		if (this.props.glyph) {
			return (<Icon glyph={this.props.glyph} withText/>);
		}
	}

	render() {
		const props = {...this.props};
		const classes = this.getPtClassSet();
		classes.active = props.active;
		const className = classNames(props.className, classes);
		const icon = this.getIconComponent();

		delete props.ptClass;
		delete props.active;
		delete props.eventKey;

		return (
			<li className={className}>
				<a {...props} >
				{icon}{this.props.title}
			   </a>
			</li>
		);
	}
}

Tab.defaultProps = {
	ptClass: 'tab-item',
	active: false
};

Tab.propTypes = {
	active: PropTypes.bool,
	title: PropTypes.string.isRequired,
	glyph: PropTypes.string
};
