import React, { useEffect } from "react";
import styled from "styled-components";
import adjust from "../utils/adjust-color";

const StyledColorSwatch = styled.label`
  font-weight: 600;
  flex-direction: column;
  margin-top: 23px;
  font-size: 14px;

  div {
    display: flex;
    width: fit-content;
    overflow: hidden;
    margin-top: 7px;
  }

  [type="text"] {
    text-transform: lowercase;
    border: none;
    background-color: #22252a;
    height: 42px;
    width: 120px;
    padding: 12px;
    color: #abb1bf;

    &:focus {
      outline: none;
    }
  }

  [type="color"] {
    height: 42px;
    width: 42px;
    cursor: pointer;

    position: relative;
    border: none;
    background: none;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--background);
    }
  }
`;

let $ = document.querySelectorAll.bind(document);

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

const HEX = /^#[0-9a-fA-F]{6}/;

function handleInput(event) {
  let icon = event.target.previousSibling;
  let matches = $(`.${icon.classList[0]}`);
  console.log(matches);

  matches.forEach((element) => {
    if (element.value.length == 7 && HEX.test(event.target.value)) {
      element.style.setProperty("--background", event.target.value);
      element.value = event.target.value;
    } else {
    }
  });
}

function handleChange(event) {
  let input = event.target.nextSibling;
  let matches = $(`.${input.classList[0]}`);

  matches.forEach((element) => {
    element.value = event.target.value;
    element.style.setProperty("--background", `${input.value}`);
  });

  event.target.style.setProperty("--background", `${input.value}`);
  input.value = event.target.value;
}

const Swatch = ({ children, hex, className }) => {
  useEffect(() => {
    let blackInput = $(".black_0");
    blackInput.forEach((element) => {
      let black = element;
      element.addEventListener("input", () => {
        $(".black-dark").forEach((element) => {
          element.value = adjust(black.value, -5);
          element.style.setProperty("--background", `${element.value}`);
        });

        for (let i = 1; i < 5; i++) {
          $(`.black_${i}`).forEach((element) => {
            element.value = adjust(black.value, easeInOutQuad(i * -1 - 1));
            element.style.setProperty("--background", `${element.value}`);
          });
        }
      });
    });

    let whiteInput = $(".white_0");

    whiteInput.forEach((element) => {
      let white = element;
      element.addEventListener("change", () => {
        $(".white-dark").forEach((element) => {
          element.value = adjust(white.value, -30);
          element.style.setProperty("--background", `${element.value}`);
        });
      });
    });
  });

  return (
    <StyledColorSwatch>
      {children}
      <div className="swatch">
        <input type="color" className={className} onChange={handleChange} />
        <input
          required="required"
          type="text"
          className={className}
          maxLength="7"
          onInput={handleInput}
          defaultValue={hex}
          placeholder="#000000"
        />
      </div>
    </StyledColorSwatch>
  );
};

export default Swatch;
