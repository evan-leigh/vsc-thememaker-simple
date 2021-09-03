import React from "react";
import styled from "styled-components";
import { Dropdown, onDragOver, onDrop, DragAndDrop } from "./drop-down";
import * as token from "../utils/tokens";

const StyledAssignScopes = styled.div``;

const StyledScopeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333b47;
  font-weight: 600;
  font-size: 0.65em;
  padding: 10px;

  &&:first-child {
    margin-top: 0;
  }

  &&.open + div {
    min-height: 53px;
  }

  &&.closed + div {
    min-height: 0;
    padding: 0;
    overflow: hidden;
    height: 0;
  }

  &&.open svg rect:first-child {
    transform: rotate(90deg);
    /* transition: all 0.3s ease; */
    transform-origin: 50% 50%;
  }

  &&.closed svg rect:first-child {
    /* transition: all 0.3s ease; */
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
`;

const StyledScopes = styled.div`
  border: 1px solid #333b47;
  background-color: #22252a;
  box-shadow: inset 0px 0px 0px 1px #22252a;
  border: 20px solid #333b47;
  margin-bottom: 20px;
  display: block;
  padding-bottom: 20px;
`;

const ScopeHeader = ({ children }) => {
  return (
    <StyledScopeHeader className="scope-header open">
      {children}
      <Dropdown />
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
      <ScopeHeader>Black +4</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.comment}>Comments</DragAndDrop>
      </Scopes>

      <ScopeHeader>White</ScopeHeader>
      <Scopes></Scopes>

      <ScopeHeader>White -2</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.brace}>Braces</DragAndDrop>
        <DragAndDrop scope={token.embedded}>Embedded</DragAndDrop>
        <DragAndDrop scope={token.propertyName}>Property Names</DragAndDrop>
        <DragAndDrop scope={token.htmlBrackets}>HTML Brackets</DragAndDrop>
        <DragAndDrop scope={token.operator}>Operators</DragAndDrop>
        <DragAndDrop scope={token.delimiter}>Delimiters</DragAndDrop>
      </Scopes>

      <ScopeHeader>Red</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.objectKey}>Object Keys</DragAndDrop>
        <DragAndDrop scope={token.objectProperty}>Object Property</DragAndDrop>
        <DragAndDrop scope={token.tag}>Tags</DragAndDrop>
        <DragAndDrop scope={token.variableProperty}>
          Property Variable
        </DragAndDrop>
        <DragAndDrop scope={token.variable}>Variables</DragAndDrop>
      </Scopes>

      <ScopeHeader>Green</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.string}>Strings</DragAndDrop>
      </Scopes>

      <ScopeHeader>Yellow</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.attribute}>Attributes</DragAndDrop>
        <DragAndDrop scope={token.keywordThis}>This Keyword</DragAndDrop>
        <DragAndDrop scope={token.variableObj}>Objects</DragAndDrop>
      </Scopes>

      <ScopeHeader>Orange</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.number}>Numbers</DragAndDrop>
        <DragAndDrop scope={token.unit}>Units</DragAndDrop>
        <DragAndDrop scope={token.color}>Color Values</DragAndDrop>
        <DragAndDrop scope={token.selectorClass}>Class Selectors</DragAndDrop>
      </Scopes>

      <ScopeHeader>Blue</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.component}>Components</DragAndDrop>
        <DragAndDrop scope={token.propertyValue}>Property Values</DragAndDrop>
        <DragAndDrop scope={token.functCall}>Function Calls</DragAndDrop>
        <DragAndDrop scope={token.escapeChar}>Escape Characters</DragAndDrop>
      </Scopes>

      <ScopeHeader>Magenta</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.keyword}>Keywords</DragAndDrop>
        <DragAndDrop scope={token.keywordFunction}>
          Function Keyword
        </DragAndDrop>
        <DragAndDrop scope={token.operatorLogical}>
          Logical Operators
        </DragAndDrop>
        <DragAndDrop scope={token.dataType}>Data Types</DragAndDrop>
        <DragAndDrop scope={token.keywordImportant}>
          Important Keyword
        </DragAndDrop>
        <DragAndDrop scope={token.keywordAtRule}>At Rule Keyword</DragAndDrop>
      </Scopes>

      <ScopeHeader>Cyan</ScopeHeader>
      <Scopes>
        <DragAndDrop scope={token.supportConst}>
          Constant Properties
        </DragAndDrop>
        <DragAndDrop scope={token.templateExp}>Template Expression</DragAndDrop>
        <DragAndDrop scope={token.constant}>Constants</DragAndDrop>
        <DragAndDrop scope={token.selectorId}>ID Selectors</DragAndDrop>
        <DragAndDrop scope={token.boolean}>Booleans</DragAndDrop>
      </Scopes>
    </StyledAssignScopes>
  );
};

export default AssignScopes;
