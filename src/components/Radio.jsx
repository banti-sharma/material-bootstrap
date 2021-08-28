import React from 'react';
import PropTypes from 'prop-types';
import { Component } from "./Component.jsx";

export default class Radio extends Component {
	handleChangeRadio(event) {
		if (this.props.onChange) {
			this.props.onChange(event);
		}
	}

	render() {
		return (
			<div className="radio">
				<label>
					<input {...this.props} type="radio" onChange={this.handleChangeRadio}/>
					{this.props.label}
				</label>
			</div>
		);
	}
}

Radio.propTypes = {
	label: PropTypes.string
};
