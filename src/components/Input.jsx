import React from 'react';
import PropTypes from 'prop-types';
import { Component } from "./Component.jsx";
import './Input.css';

export default class Input extends Component {
	constructor(props) {
		super(props);

		this._node = this._node.bind(this);
	}

	_node(n) {
		this.node = n;
	}

	getValue() {
		return this.node.querySelector('input').value;
	}

	render() {
		return (
			<div className="form-group" ref={this._node}>
				<label>{this.props.label}</label>
				<input {...this.props} className="form-control" placeholder={this.props.placeholder} type={this.props.type}/>
			</div>
		);
	}
}

Input.defaultProps = {
	type: 'text'
};

Input.propTypes = {
	label: PropTypes.string
};
