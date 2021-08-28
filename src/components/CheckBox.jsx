import React from "react";
import PropTypes from "prop-types";
import { Component } from "./Component";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this._node = this._node.bind(this);
  }

  _node(n) {
    this.node = n;
  }

  isChecked() {
    return this.node.querySelector("input").checked;
  }

  render() {
    return (
      <div className="checkbox" ref={this._node}>
        <label>
          <input {...this.props} type="checkbox" />
          {this.props.label}
        </label>
      </div>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
};
