import React from 'react';
import PropTypes from 'prop-types';
import { Component } from "./Component.jsx";

export default class Options extends Component {
	constructor() {
		super();
		this.refSelectIndex = this.refSelectIndex.bind(this);
	}

	refSelectIndex(sel) {
		this.select = sel;
	}

	getSelectedIndex() {
		if (this.select) {
			return this.select.selectedIndex;
		}
	}

	render() {
		if (this.props.items.length > 0) {
			const items = this.props.items.map((item, i) => {
				const key = `option-${i}`;
				return (
					<option key={key}>{item}</option>
				);
			});

			return (
				<select className="form-control" ref={this.refSelectIndex}>
					{items}
				</select>
			);
		}

		return (
			<span/>
		);
	}
}

Options.defaultProps = {
	items: []
};

Options.propTypes = {
	items: PropTypes.array
};
