import React from "react";
import { withRouter } from "react-router-dom";
import TabGroup from "../components/TabGroup";
import Tab from "../components/Tab";
import Button from "../components/Button";
import { Toolbar, Section } from "../components/Toolbar";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const Main = (props) => {
  return (
    <div>
      <Navbar title="test toolbar">
        <section className="toolbar-section">Khamani</section>
      </Navbar>
      <Toolbar>
        <Section>
          <Button icon="file_upload" className="btn-dark dark" text="Test button"></Button>
          <Button icon="folder" className="btn-dark dark btn-accept" text="Test button">
            <span>icon-asset</span>
          </Button>
          <Button
            icon="accessibility"
            className="btn-dark dark btn-reject"
            text="Test ICon button"
          ></Button>
          <select className="dark">
            <option>Khamani</option>
            <option>Banti</option>
          </select>
        </Section>
        <Input type="text" className="dark" placeholder="testing input"></Input>
      </Toolbar>
      <TabGroup activeKey="khamani">
        <Tab title="khamani" eventKey="khamani" active={true}>
          <Toolbar>
            <Section>
              <Button icon="cloud_queue" className="btn-dark dark" text="Test button"></Button>
              <Button icon="cloud_upload" className="btn-dark dark btn-accept" text="Test button">
                <span>icon-asset</span>
              </Button>
              <Button
                className="btn-dark dark btn-reject"
                text="Test button"
              ></Button>
                 <Button
                className="btn-dark dark btn-warn"
                text="Test button"
              ></Button>
              <select className="dark"></select>
            </Section>
            <Input
              type="text"
              className="dark"
              placeholder="testing input"
            ></Input>

          <Input
              type="checkbox"
              className="dark"
              placeholder="testing input"
            ></Input>

          <Input
              type="radio"
              className="dark"
              placeholder="testing input"
            ></Input>
          </Toolbar>
        </Tab>
        <Tab title="khamani Ram" eventKey="khamani ram"></Tab>
        <Tab title="Kapil" eventKey="Kapil"></Tab>
      </TabGroup>
    </div>
  );
};

export default withRouter(Main);
