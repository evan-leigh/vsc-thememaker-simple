import React from "react";
import { Header } from "./layout/header";
import Output from "./components/output";

import { Footer, Panel, TabArea, Tab, Main } from "./index.styled";

import "./index.css";

import { SiGithub } from "react-icons/si";

import ColorPalatte from "./components/color-palette";
import AssignScopes from "./components/assign-scopes";
import EditorSettings from "./components/editor-settings";

const TabRow = () => {
  function handleTabChange(event) {
    let tabs = document.querySelectorAll(".tab");
    let panels = document.querySelectorAll(".panel");

    tabs.forEach((tab) => {
      tab.style.borderTop = "1px solid #333b47";
      tab.style.borderBottom = "1px solid #333b47";
      tab.style.background = "#22252a";
    });

    event.target.style.borderTop = "1px solid #0d8bf2";
    event.target.style.borderBottom = "1px solid #282c34";
    event.target.style.background = "#282c34";

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
      {/* <Tab className="tab" onClick={handleTabChange}>
        Editor Settings
      </Tab>
      <Tab className="tab" onClick={handleTabChange}>
        Theme Details
      </Tab> */}
    </TabArea>
  );
};

function Index() {
  return (
    <Main>
      {/* <Header /> */}

      {/* <EditorPreviewContainer>
        <EditorPreview />
      </EditorPreviewContainer> */}

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
      </Footer>
    </Main>
  );
}

export default Index;
