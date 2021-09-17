import React from "react";
import styled from "styled-components";
import { onDragOver, onDrop, DragAndDrop } from "./drag-and-drop";
import * as token from "../utils/tokens";
import ColorSwatch from "./color-swatch";

const StyledAssignScopes = styled.div``;

const StyledScopeHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  &&:first-child {
    margin-top: 0;
  }
`;

const StyledScopes = styled.div`
  border: 1px solid #333b47;
  border-radius: 4px;
  background-color: #22252a;
  padding: 10px;
  margin-bottom: 20px;
  display: block;
`;

const ScopeHeader = ({ children, color }) => {
  return (
    <StyledScopeHeader data-color={color} className="scope-header open">
      {children}
    </StyledScopeHeader>
  );
};

const Scopes = ({ children }) => {
  return (
    <StyledScopes
      className="scope-list"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {children}
    </StyledScopes>
  );
};

const AssignScopes = () => {
  return (
    <StyledAssignScopes>
      <ScopeHeader color="Black +4">
        Black 40
        <ColorSwatch className="black_4" hex="#5a5e66"></ColorSwatch>
      </ScopeHeader>

      <Scopes>
        <DragAndDrop token={token.comment}>Comments</DragAndDrop>
      </Scopes>

      <ScopeHeader color="White">
        White
        <ColorSwatch className="white_0" hex="#d5d9e2"></ColorSwatch>
      </ScopeHeader>
      <Scopes></Scopes>

      <ScopeHeader color="White -2">
        White 20
        <ColorSwatch className="white-dark" hex="#ABB1BF"></ColorSwatch>
      </ScopeHeader>
      <Scopes>
        <DragAndDrop token={token.brace}>Braces</DragAndDrop>
        <DragAndDrop token={token.embedded}>Embedded</DragAndDrop>
        <DragAndDrop token={token.foreground}>Foreground</DragAndDrop>
        <DragAndDrop token={token.propertyName}>Property Names</DragAndDrop>
        <DragAndDrop token={token.htmlBrackets}>HTML Brackets</DragAndDrop>
        <DragAndDrop token={token.operator}>Operators</DragAndDrop>
        <DragAndDrop token={token.delimiter}>Delimiters</DragAndDrop>
      </Scopes>

      <ScopeHeader color="Red">
        Red <ColorSwatch className="red" hex="#e06c75"></ColorSwatch>
      </ScopeHeader>
      <Scopes>
        <DragAndDrop token={token.objectKey}>Object Keys</DragAndDrop>
        <DragAndDrop token={token.objectProperty}>Object Property</DragAndDrop>
        <DragAndDrop token={token.tag}>HTML Tags</DragAndDrop>
        <DragAndDrop token={token.variableProperty}>
          Property Variable
        </DragAndDrop>
        <DragAndDrop token={token.variable}>Variables</DragAndDrop>
      </Scopes>

      <ScopeHeader color="Green">
        Green<ColorSwatch className="green" hex="#98C379"></ColorSwatch>
      </ScopeHeader>
      <Scopes>
        <DragAndDrop token={token.string}>Strings</DragAndDrop>
      </Scopes>

      <ScopeHeader color="Yellow">
        Yellow
        <ColorSwatch hex="#E5C07B" className="yellow"></ColorSwatch>
      </ScopeHeader>
      <Scopes>
        <DragAndDrop token={token.attribute}>Attributes</DragAndDrop>
        <DragAndDrop token={token.keywordThis}>This Keyword</DragAndDrop>
        <DragAndDrop token={token.variableObj}>Objects</DragAndDrop>
      </Scopes>

      <ScopeHeader color="Orange">
        Orange
        <ColorSwatch hex="#D19A66" className="orange"></ColorSwatch>
      </ScopeHeader>

      <Scopes>
        <DragAndDrop token={token.number}>Numbers</DragAndDrop>
        <DragAndDrop token={token.unit}>Units</DragAndDrop>
        <DragAndDrop token={token.color}>Color Values</DragAndDrop>
        <DragAndDrop token={token.selectorClass}>Class Selectors</DragAndDrop>
      </Scopes>

      <ScopeHeader color="Blue">
        Blue
        <ColorSwatch hex="#61AFEF" className="blue"></ColorSwatch>
      </ScopeHeader>
      <Scopes>
        <DragAndDrop token={token.component}>Components</DragAndDrop>
        <DragAndDrop token={token.propertyValue}>Property Values</DragAndDrop>
        <DragAndDrop token={token.functCall}>Function Calls</DragAndDrop>
        <DragAndDrop token={token.escapeChar}>Escape Characters</DragAndDrop>
      </Scopes>

      <ScopeHeader color="Magenta">
        Magenta
        <ColorSwatch hex="#C678DD" className="magenta"></ColorSwatch>
      </ScopeHeader>
      <Scopes>
        <DragAndDrop token={token.keyword}>Keywords</DragAndDrop>
        <DragAndDrop token={token.keywordFunction}>
          Function Keyword
        </DragAndDrop>
        <DragAndDrop token={token.operatorLogical}>
          Logical Operators
        </DragAndDrop>
        <DragAndDrop token={token.dataType}>Data Types</DragAndDrop>
        <DragAndDrop token={token.keywordImportant}>
          Important Keyword
        </DragAndDrop>
        <DragAndDrop token={token.keywordAtRule}>At Rule Keyword</DragAndDrop>
      </Scopes>

      <ScopeHeader color="Cyan">
        Cyan
        <ColorSwatch hex="#56B6C2" className="cyan"></ColorSwatch>
      </ScopeHeader>
      <Scopes>
        <DragAndDrop token={token.supportConst}>
          Constant Properties
        </DragAndDrop>
        <DragAndDrop token={token.templateExp}>Template Expression</DragAndDrop>
        <DragAndDrop token={token.constant}>Constants</DragAndDrop>
        <DragAndDrop token={token.selectorId}>ID Selectors</DragAndDrop>
        <DragAndDrop token={token.boolean}>Booleans</DragAndDrop>
      </Scopes>
    </StyledAssignScopes>
  );
};

export default AssignScopes;
