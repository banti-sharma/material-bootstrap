import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Sortable from 'sortablejs';
import { Component } from "./Component.jsx";

export default class ListGroup extends Component {
	constructor(props) {
		super(props);
		this._node = this._node.bind(this);
	}

	_node(n) {
		if (n) {
			this.node = n;
			this.sortable = Sortable.create(n, {
				handle: '.list-group',
				disabled: !this.props.draggable
			});
		}
	}

	componentWillUnmount() {
		if (this.sortable) {
			this.sortable.destory();
			this.sortable = null;
		}
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);

		return (
			<ul className={className} ref={this._node}>
				{this.props.children}
			</ul>
		);
	}
}

ListGroup.defaultProps = {
	ptClass: 'list-group',
	draggable: false
};

ListGroup.propTypes = {
	draggable: PropTypes.bool
};
