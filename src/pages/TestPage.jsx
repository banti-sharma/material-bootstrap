import React from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/Button";
import { Toolbar, Section } from "../components/Toolbar";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const TestPage = (props) => {
  return (
    <div>
      <Navbar title="test toolbar">
        <section className="toolbar-section">TestPage</section>
      </Navbar>
     
    </div>
  );
};

export default withRouter(TestPage);
