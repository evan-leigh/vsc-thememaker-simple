import React, { useEffect } from "react";
import styled from "styled-components";

import { BsTypeBold, BsTypeItalic, BsTypeUnderline } from "react-icons/bs";

const $ = document.querySelectorAll.bind(document);

const StyledDragAndDrop = styled.button`
  background-color: transparent;
  font-family: monospace;
  margin: 10px;
  position: relative;
  border-radius: 9px;
  z-index: 100;
  padding: 12px 22px;
  width: fit-content;
  color: #5c6370;

  &:hover {
    background-color: #0000;
  }
`;

function onDragStart(event) {
  event.target.childNodes[0].style.animation = "fade-out 0.0s";
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

export const FontStyle = styled.div`
  position: absolute;
  top: -90%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  border: 1px solid #333b47;
  min-width: 120px;
  opacity: 0;
  height: 40px;
  cursor: default;
  pointer-events: none;
  background-color: #22252a;

  svg map {
    padding: 5px;
    border-radius: 5px;
    width: 30%;
    height: 27px;

    &:hover {
      background-color: #30343c;
    }

    path {
      pointer-events: none;
    }
  }

  @keyframes fade-in {
    to {
      opacity: 1;
      pointer-events: all;
    }
  }
  @keyframes fade-out {
    to {
      opacity: 0;
      pointer-events: all;
    }
  }
`;

export const DragAndDrop = ({ children, className, token }) => {
  useEffect(() => {
    $(".drag-and-drop").forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.childNodes[0].style.animation = "fade-in 0.1s ease 0.4s forwards";
      });
      element.childNodes[0].addEventListener("mouseout", () => {
        element.childNodes[0].style.animation = "fade-out 0.0s";
      });
      element.addEventListener("mouseout", () => {
        element.childNodes[0].style.animation = "fade-out 0.0s";
      });
    });
  });

  function handleStyle(event) {
    let style = event.target.getAttribute("data-style");

    const button = event.target.parentElement.parentElement.style;

    button.removeProperty("font-style");
    button.removeProperty("font-weight");
    button.removeProperty("text-decoration");

    event.target.style.background == "rgb(229, 192, 123)" ? removeStyles() : transformButton();

    function removeStyles() {
      event.target.style.removeProperty("background");
      event.target.parentElement.childNodes.forEach((element) => {
        element.style.removeProperty("background");
      });
    }

    function transformButton() {
      event.target.parentElement.childNodes.forEach((element) => {
        element.style.removeProperty("background");
      });

      event.target.style.background = "#e5c07b";

      switch (style) {
        case "italic":
          button.fontStyle = style;
        case "bold":
          button.fontWeight = style;
        case "underline":
          button.textDecoration = style;
      }
    }
  }

  return (
    <StyledDragAndDrop
      className={(className || "") + " drag-and-drop"}
      data-token={token}
      onDragStart={onDragStart}
      draggable
    >
      <FontStyle>
        <BsTypeBold data-style="bold" onClick={handleStyle} />
        <BsTypeItalic data-style="italic" onClick={handleStyle} />
        <BsTypeUnderline data-style="underline" onClick={handleStyle} />
      </FontStyle>
      {children}
    </StyledDragAndDrop>
  );
};
