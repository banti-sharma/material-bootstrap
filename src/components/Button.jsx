import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Component } from "./Component";
import './Button.css';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this._node = this._node.bind(this);
  }

  _node(n) {
    this.node = n;
  }

  getIconComponent() {
    if (this.props.icon) {
      return  <i className = "material-icons">{this.props.icon}</i>;
    }
  }

  render() {
    const props = Object.assign({}, this.props);
    const icon = this.getIconComponent();
    const classes = this.getPtClassSet();
    classes.active = this.props.active;
    classes["pull-right"] = this.props.pullRight;
    const className = classNames(this.props.className, classes);

    delete props.ptClass;
    delete props.ptStyle;
    delete props.ptSize;
    delete props.btSize;
    delete props.glyph;
    delete props.withText;
    delete props.active;
    delete props.pullRight;
    delete props.text;

    return (
      <button
        {...props}
        className={className}
        onClick={this.props.onClick}
        ref={this._node}
      >
        {icon}
        {this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  ptClass: "button",
  active: false,
  pullRight: false,
};

Button.propTypes = {
  pullRight: PropTypes.bool,
  active: PropTypes.bool,
  form: PropTypes.bool,
  onClick: PropTypes.func
};
