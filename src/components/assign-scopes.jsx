import React from "react";
import styled from "styled-components";
import { Dropdown, onDragOver, onDrop, DragAndDrop } from "./drop-down";

const StyledAssignScopes = styled.div``;

const StyledScopeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333b47;
  border-top: 1px solid #5c637060;
  font-weight: 600;
  font-size: 0.65em;
  padding: 10px;

  &&:first-child {
    margin-top: 0;
  }

  &&.open + div {
    min-height: 53px;
    transition: all 0.3s ease;
  }

  &&.closed + div {
    height: 0;
    transition: all 0.3s ease;
  }

  &&.open svg rect:first-child {
    transform: rotate(90deg);
    transition: all 0.3s ease;
    transform-origin: 50% 50%;
  }

  &&.closed svg rect:first-child {
    transition: all 0.3s ease;
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
`;

const StyledScopes = styled.div`
  border: 1px solid #333b47;
  overflow-y: hidden;
  background-color: #22252a;
  width: 578px;
  display: block;
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
      <ScopeHeader>White</ScopeHeader>
      <Scopes>
        <DragAndDrop>comment.line</DragAndDrop>
      </Scopes>

      <ScopeHeader>Red</ScopeHeader>
      <Scopes>
        <DragAndDrop>variable.other.readwrite</DragAndDrop>
        <DragAndDrop>entity.name.tag</DragAndDrop>
      </Scopes>

      <ScopeHeader>Green</ScopeHeader>
      <Scopes>
        <DragAndDrop>string.quoted</DragAndDrop>
      </Scopes>

      <ScopeHeader>Yellow</ScopeHeader>
      <Scopes>
        <DragAndDrop>entity.other.attribute-name</DragAndDrop>
      </Scopes>

      <ScopeHeader>Orange</ScopeHeader>
      <Scopes>
        <DragAndDrop>constant.numeric</DragAndDrop>
      </Scopes>

      <ScopeHeader>Blue</ScopeHeader>
      <Scopes>
        <DragAndDrop>support.class.component</DragAndDrop>
      </Scopes>

      <ScopeHeader>Magenta</ScopeHeader>
      <Scopes>
        <DragAndDrop>storage.type.function</DragAndDrop>
        <DragAndDrop>keyword.control</DragAndDrop>
      </Scopes>

      <ScopeHeader>Cyan</ScopeHeader>
      <Scopes>
        <DragAndDrop>constant.language.boolean</DragAndDrop>
        <DragAndDrop>support.constant.property-value</DragAndDrop>
      </Scopes>
    </StyledAssignScopes>
  );
};

export default AssignScopes;
