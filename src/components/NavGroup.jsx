import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Sortable from 'sortablejs';
import { Component } from "./Component.jsx";

export default class NavGroup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeKey: props.activeKey,
			children: props.children
		};

		this._node = this._node.bind(this);
	}

	_node(n) {
		if (n) {
			this.node = n;
			this.sortable = Sortable.create(n, {
				handle: '.nav-group',
				disabled: !this.props.draggable
			});
		}
	}

	renderNav(child, index) {
		const active = this.state.activeKey === child.props.eventKey;
		return React.cloneElement(child, {
			active: active,
			key: `nav-group-item-${index}`,
			onClick: () => {
				this.setState({
					activeKey: child.props.eventKey
				});

				if (this.props.onSelect) {
					return this.props.onSelect(child.props.eventKey);
				}
			}
		});
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
		let childNavs;

		if (this.state.children) {
			childNavs = this.state.children.map((child, index) => {
				return this.renderNav(child, index);
			});
		}
		return (
			<nav className={className} ref={this._node}>
					{childNavs}
			</nav>
		);
	}
}

NavGroup.defaultProps = {
	activeKey: '',
	ptClass: 'nav-group',
	draggable: false
};

NavGroup.propTypes = {
	activeKey: PropTypes.any,
	onSelect: PropTypes.func,
	draggable: PropTypes.bool
};
