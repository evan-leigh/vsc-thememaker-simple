import React from "react";
import { Header } from "./layout/header";
import Output from "./components/output";

import { Footer, Panel, TabArea, Tab, Main } from "./index.styled";

import "./index.css";

import { SiGithub, SiBuymeacoffee } from "react-icons/si";

import ColorPalatte from "./components/color-palette";
import AssignScopes from "./components/assign-scopes";
import EditorSettings from "./components/editor-settings";

// TODO: Finish active tab styling

const TabRow = () => {
  function handleTabChange(event) {
    let tabs = document.querySelectorAll(".tab");
    let panels = document.querySelectorAll(".panel");

    tabs.forEach((tab) => {
      tab.classList.add("active");
    });

    event.target.classList.remove("active");

    panels.forEach((panel) => {
      panel.style.display = "none";
    });

    document.querySelector(
      `[name="${event.target.textContent}"]`
    ).style.display = "inline-block";
  }

  return (
    <TabArea>
      <Tab className="tab" onClick={handleTabChange}>
        Color Palette
      </Tab>
      <Tab className="tab" onClick={handleTabChange}>
        Assign Scopes
      </Tab>
      <Tab className="tab" onClick={handleTabChange}>
        Editor Settings
      </Tab>
      <Tab className="tab" onClick={handleTabChange}>
        Theme Details
      </Tab>
    </TabArea>
  );
};

function Index() {
  return (
    <Main>
      <TabRow />

      <Panel className="panel" name="Color Palette">
        <ColorPalatte />
      </Panel>

      <Panel className="panel" name="Assign Scopes">
        <AssignScopes />
      </Panel>

      <Panel className="panel" name="Editor Settings">
        <EditorSettings />
      </Panel>

      <Panel className="panel" name="Theme Details">
        Theme Details
      </Panel>

      <Output />

      <Footer>
        <a href="https://github.com/evan-leigh/vsc-thememaker-simple">
          <SiGithub />
        </a>
        <SiBuymeacoffee />
      </Footer>
    </Main>
  );
}

export default Index;
