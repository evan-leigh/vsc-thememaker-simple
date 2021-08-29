import React, { useEffect } from "react";
import syntaxHighlight from "../utils/sytax-highlight";
import styled from "styled-components";
import adjust from "../utils/adjust-color";
import { Output } from "../index.styled";

const StyledColorPalette = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 0.65em;
    align-items: center;

    [type="text"] {
      margin-left: auto;
      text-transform: uppercase;
      font-family: monospace;
      background-color: #22252a;
      padding: 12px;
      color: #abb1bf;
      border: 1px solid #333b47;
      margin-right: 10px;

      &:focus {
        outline: none;
      }
    }
  }
  [type="color"] {
    width: 36px;
    height: 36px;
    cursor: pointer;
    border: 1px solid #333b47;
    position: relative;
    background: none;

    &::after {
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

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function handleChangeBlack(event) {
  let black = event.target;
  black.previousSibling.value = black.value;

  document.querySelectorAll(".black-dark").forEach((element) => {
    element.value = adjust(black.value, -5);
    element.style.setProperty("--background", `${element.value}`);
  });

  for (let i = 0; i < 6; i++) {
    document.querySelectorAll(`.black_${i}`).forEach((element) => {
      element.value = adjust(black.value, easeInOutQuad(i * -1));
      element.style.setProperty("--background", `${element.value}`);
    });
  }
}

let white;
function handleChangeWhite(event) {
  white = event.target;
  white.previousSibling.value = white.value;

  document.querySelectorAll(".white_0").forEach((element) => {
    element.value = white.value;
    element.style.setProperty("--background", `${element.value}`);
  });

  document.querySelectorAll(".white-dark").forEach((element) => {
    element.value = adjust(white.value, -45);
    element.style.setProperty("--background", `${element.value}`);
  });
}

function handleChange(event) {
  let input = event.target.previousSibling;

  input.value = event.target.value;

  event.target.style.setProperty("--background", `${event.target.value}`);
}

const ColorPalatte = () => {
  let output = document.getElementsByTagName("pre");
  useEffect(() => {
    let colorIconList = Array.from(
      document.querySelectorAll('input[type="color"]')
    );

    colorIconList.forEach((inputIcon) => {
      let inputValue = inputIcon.previousElementSibling.value;
      inputIcon.value = inputValue;
      inputIcon.style.setProperty("--background", `${inputValue}`);
    });

    document.getElementById("copy").onclick = function () {
      let text = document.getElementById("output").textContent;
      navigator.clipboard.writeText(text);
    };
  });

  function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("json").style.display = "inline-block";

    fetch("/template.txt")
      .then((response) => response.text())
      .then((text) => {
        const inputHexValue = Array.from(
          document.querySelectorAll('input[type="text"]')
        );

        const colorNames = [
          "White \\-2",
          "White",
          "Black \\-1",
          "Black \\+1",
          "Black \\+2",
          "Black \\+3",
          "Black \\+4",
          "Black",
          "Red",
          "Green",
          "Yellow",
          "Orange",
          "Blue",
          "Magenta",
          "Cyan",
          "Error",
          "Warning",
          "Modified",
          "Added",
          "Accent",
        ];

        let userTheme = text;

        let scopeList = document.querySelectorAll(".scope-list");
        let scopeHeader = document.querySelectorAll(".scope-header");

        for (let i = 0; i < scopeList.length; i++) {
          let currentScopeList = scopeList[i].childNodes;

          let scopeString = "";

          function getScopes() {
            currentScopeList.forEach((element) => {
              scopeString += element.textContent + ", ";
            });
            return scopeString.slice(0, -2);
          }

          userTheme = userTheme.replace(
            '"tokenColors": [',
            '"tokenColors": [ ' +
              "\n" +
              "\n   {" +
              `\n     "scope": "${getScopes()}"` +
              '\n     "settings": {' +
              `\n      "foreground": "[${scopeHeader[i].textContent}]"` +
              "\n      }" +
              "\n    },"
          );
        }

        for (let i = 0; i < colorNames.length; i++) {
          userTheme = userTheme.replace(
            new RegExp('"\\[' + colorNames[i] + "\\]", "g"),
            `"${inputHexValue[i].value}`
          );
        }
        output[0].innerHTML = syntaxHighlight(userTheme);
      });
  }
  return (
    <StyledColorPalette onSubmit={handleSubmit}>
      <label className="shade">
        White -2
        <input
          required="required"
          type="text"
          onChange={handleChangeWhite}
          onInput={handleChangeWhite}
          defaultValue="#858992"
          className="white-dark"
          placeholder="#000000"
        />
        <input
          type="color"
          className="white-dark"
          onChange={handleChangeWhite}
        />
      </label>
      <label>
        White
        <input
          required="required"
          type="text"
          onChange={handleChangeWhite}
          onInput={handleChangeWhite}
          className="white_0"
          defaultValue="#D5D9E2"
          placeholder="#000000"
        />
        <input type="color" className="white_0" onChange={handleChangeWhite} />
      </label>
      <label className="shade">
        Black -1
        <input
          required="required"
          type="text"
          onChange={handleChangeBlack}
          onInput={handleChangeBlack}
          defaultValue="#141820"
          className="black-dark"
          placeholder="#000000"
        />
        <input
          type="color"
          className="black-dark"
          onChange={handleChangeBlack}
        />
      </label>
      <label className="shade">
        Black +1
        <input
          required="required"
          type="text"
          onChange={handleChangeBlack}
          onInput={handleChangeBlack}
          className="black_1"
          defaultValue="#353941"
          placeholder="#000000"
        />
        <input type="color" className="black_1" onChange={handleChangeBlack} />
      </label>
      <label className="shade">
        Black +2
        <input
          required="required"
          type="text"
          onChange={handleChangeBlack}
          onInput={handleChangeBlack}
          className="black_2"
          defaultValue="#42464E"
          placeholder="#000000"
        />
        <input type="color" className="black_2" onChange={handleChangeBlack} />
      </label>
      <label className="shade">
        Black +3
        <input
          required="required"
          type="text"
          onChange={handleChangeBlack}
          onInput={handleChangeBlack}
          className="black_3"
          defaultValue="#4F535B"
          placeholder="#000000"
        />
        <input type="color" className="black_3" onChange={handleChangeBlack} />
      </label>
      <label className="shade">
        Black +4
        <input
          required="required"
          type="text"
          onChange={handleChangeBlack}
          onInput={handleChangeBlack}
          className="black_4"
          defaultValue="#83878F"
          placeholder="#000000"
        />
        <input type="color" className="black_4" onChange={handleChangeBlack} />
      </label>
      <label>
        Black
        <input
          required="required"
          type="text"
          onChange={handleChangeBlack}
          onInput={handleChangeBlack}
          className="black_0"
          defaultValue="#282c34"
          placeholder="#000000"
        />
        <input type="color" className="black_0" onChange={handleChangeBlack} />
      </label>
      <br />
      <br />
      <label>
        Red
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#e06c75"
          contentEditable="true"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label>
        Green
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#98c379"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label>
        Yellow
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#e5c07b"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label>
        Orange
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#d19a66"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label>
        Blue
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#61afef"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label>
        Magenta
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#c678dd"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label>
        Cyan
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#56b6c2"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Error
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#e06c75"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label>
        Warning
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#e5c07b"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label htmlFor="modified">
        Modified
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#61afef"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <label>
        Added
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#98c379"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label htmlFor="accent">
        Accent
        <input
          required="required"
          type="text"
          onChange={handleChange}
          onInput={handleChange}
          defaultValue="#007EE5"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <br />
      <br />
      <button type="submit" value="submit" readOnly>
        Submit
      </button>
      <div id="json">
        <button id="copy" type="button">
          📋
        </button>
        <Output id="output"></Output>
      </div>
    </StyledColorPalette>
  );
};

export default ColorPalatte;
