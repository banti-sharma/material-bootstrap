import React from 'react';
import PropTypes from 'prop-types';

const styleMaps = {
	Classes: {
		button: 'btn',
		icon: 'icon',
		toolbar: 'toolbar',
		pane: 'pane',
		'nav-group': 'nav-group',
		'nav-group-item': 'nav-group-item',
		'tab-group': 'tab-group',
		'tab-item': 'tab-item',
		'list-group': 'list-group',
		'list-group-item': 'list-group-item'
	},
	Styles: [
		'default',
		'primary',
		'positive',
		'negative',
		'warning'
	],
	Sizes: {
		large: 'large',
		mini: 'mini',
		sm: 'sm',
		'one-fourth': 'one-fourth',
		'one-third': 'one-third'
	},
	Types: {
		header: 'header',
		footer: 'footer'
	}
};

export class Component extends React.Component {
	getPtClassSet() {
		const classes = {};
		const ptClass = this.props.ptClass && styleMaps.Classes[this.props.ptClass];

		if (ptClass) {
			classes[ptClass] = true;
			const prefix = `${ptClass}-`;
			const ptSize = this.props.ptSize && styleMaps.Styles[this.props.ptSize];

			if (ptSize) {
				classes[prefix + ptSize] = true;
			}

			if (this.props.ptStyle) {
				if (styleMaps.Styles.indexOf(this.props.ptStyle) >= 0) {
					classes[prefix + this.props.ptStyle] = true;
				} else {
					classes[this.props.ptStyle] = true;
				}
			}

			const ptType = this.props.ptType && styleMaps.Types[this.props.ptType];
			if (ptType) {
				classes[prefix + ptType] = true;
			}

			return classes;
		}
	}
}

Component.propTypes = {
	ptClass: PropTypes.string,
	ptStyle: PropTypes.string,
	ptSize: PropTypes.string,
	ptType: PropTypes.string
};
