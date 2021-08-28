import React from "react";
import classNames from "classnames";
import { Component } from "./Component.jsx";
import "./Toolbar.css";

export class Toolbar extends Component {
	constructor(props) {
	  super(props);
	  this._node = this._node.bind(this);
	}
  
	_node(n) {
	  this.node = n;
	}
  
	render() {
	  const classes = this.getPtClassSet();
	  const className = classNames(this.props.className, classes);
  
	  return (
		<div className={className} ref={this._node}>
		  {this.props.children}
		</div>
	  );
	}
  }

Toolbar.defaultProps = {
  ptClass: "toolbar",
};

export const Section = (props) => {
  const { children } = props;
  
  return <section className={'toolbar-section'}>{children}</section>;
};
