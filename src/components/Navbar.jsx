import React from 'react';
import classNames from 'classnames';
import { Component } from "./Component.jsx";
import './Navbar.css';

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this._node = this._node.bind(this);
	}

	_node(n) {
		this.node = n;
	}

	render() {
		const className = classNames(this.props.className, 'navbar');

		return (
			<nav className={className} ref={this._node}>
				{this.props.children}
			</nav>
		);
	}
}

