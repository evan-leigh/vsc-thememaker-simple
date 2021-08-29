import React, { useState } from "react";
import styled from "styled-components";

const StyledDropdown = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;

  svg {
    padding: 10px;
    width: 35px;
    height: 35px;
    rect {
      pointer-events: none;
    }
  }
`;

const StyledDragAndDrop = styled.button`
  background-color: transparent;
  font-family: monospace;
  margin: 10px;
  border-radius: 20px;
  padding: 5px 10px;
  width: fit-content;
  color: #5c6370;
  cursor: grab;
  border: 1px solid #5c6370;

  &&:active {
    cursor: grabbing;
  }

  &&:hover {
    background-color: #0000;
  }
`;

export const Dropdown = () => {
  const [open, setOpen] = useState(false);

  function toggleMenu(event) {
    setOpen(!open);

    let cls = open ? "closed" : "open";
    event.target.parentElement.parentElement.classList.remove(cls);

    cls = open ? "open" : "closed";
    event.target.parentElement.parentElement.classList.add(cls);
  }
  return (
    <StyledDropdown onClick={toggleMenu}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="13" width="5" height="30" fill="#D5D9E2" />
        <rect y="12" width="30" height="5" fill="#D5D9E2" />
      </svg>
    </StyledDropdown>
  );
};

function onDragStart(event) {
  event.currentTarget.setAttribute("id", event.target.textContent);
  event.dataTransfer.setData("text/plain", event.target.id);
}

export function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.currentTarget;

  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}

export function onDragOver(event) {
  event.preventDefault();
}

export const DragAndDrop = ({ children }) => {
  return (
    <StyledDragAndDrop onDragStart={onDragStart} draggable>
      {children}
    </StyledDragAndDrop>
  );
};
