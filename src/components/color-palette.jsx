import React, { useEffect } from "react";
import syntaxHighlight from "../utils/sytax-highlight";
import adjust from "../utils/adjust-color";
import { StyledColorPalette } from "../index.styled";
import { VscClippy } from "react-icons/vsc";
import { colorNames } from "./color-names";

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

  for (let i = 1; i < 5; i++) {
    document.querySelectorAll(`.black_${i}`).forEach((element) => {
      element.value = adjust(black.value, easeInOutQuad(i * -1 - 1));
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
    element.value = adjust(white.value, -40);
    element.style.setProperty("--background", `${element.value}`);
  });
}

const HEX = /^#[0-9a-fA-F]{6}/;

function handleInput(event) {
  let icon = event.target.nextElementSibling;

  if (event.target.value.length == 7 && HEX.test(event.target.value)) {
    event.target.style.border = "1px solid #333b47";
    icon.style.setProperty("--background", `${event.target.value}`);
    icon.value = event.target.value;
  } else {
    event.target.style.border = "1px solid #ff000060";
  }
}

function handleChange(event) {
  let input = event.target.previousSibling;
  event.target.style.setProperty("--background", `${input.value}`);
  input.style.border = "1px solid #333b47";
  input.value = event.target.value;
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

        colorNames;

        let userTheme = text;

        let scopeList = document.querySelectorAll(".scope-list");
        let scopeHeader = document.querySelectorAll(".scope-header");

        for (let i = 0; i < scopeList.length; i++) {
          let currentScopeList = scopeList[i].childNodes;

          let scopeString = "";

          function getScopes() {
            currentScopeList.forEach((element) => {
              scopeString += '        "' + element.title + '",\n';
            });
            return scopeString.replace(/,\n$/, "");
          }

          let scopeColor = scopeHeader[i].textContent;

          if (currentScopeList.length == 0) {
            null;
          } else {
            userTheme = userTheme.replace(
              '"tokenColors": [',
              '"tokenColors": [ ' +
                "\n    {" +
                `\n      "name": "${scopeColor}",` +
                '\n      "scope": [' +
                `\n${getScopes()}` +
                "\n      ]," +
                '\n      "settings": {' +
                `\n        "foreground": "[${scopeColor}]"` +
                "\n      }" +
                "\n    },"
            );
          }
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
        <input type="text" defaultValue="#ADB1BA" className="white-dark" />
        <input type="color" className="white-dark" />
      </label>
      <label>
        White
        <input
          required="required"
          type="text"
          maxLength="7"
          onInput={handleChangeWhite}
          className="white_0"
          defaultValue="#D5D9E2"
          placeholder="#000000"
        />
        <input type="color" className="white_0" onChange={handleChangeWhite} />
      </label>
      <label className="shade">
        Black -1
        <input type="text" className="black-dark" defaultValue="#23272F" />
        <input type="color" className="black-dark" />
      </label>
      <label className="shade">
        Black +1
        <input type="text" className="black_1" defaultValue="#30343C" />
        <input type="color" className="black_1" />
      </label>
      <label className="shade">
        Black +2
        <input type="text" className="black_2" defaultValue="#3A3E46" />
        <input type="color" className="black_2" />
      </label>
      <label className="shade">
        Black +3
        <input type="text" className="black_3" defaultValue="#484C54" />
        <input type="color" className="black_3" />
      </label>
      <label className="shade">
        Black +4
        <input type="text" className="black_4" defaultValue="#5A5E66" />
        <input type="color" className="black_4" />
      </label>
      <label>
        Black
        <input
          required="required"
          type="text"
          maxLength="7"
          onInput={handleChangeBlack}
          className="black_0"
          defaultValue="#282C34"
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
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
          maxLength="7"
          onInput={handleInput}
          defaultValue="#007EE5"
          placeholder="#000000"
        />
        <input type="color" onChange={handleChange} />
      </label>
      <br />
      <br />
      <div>
        <button type="submit" value="submit" readOnly>
          Submit
        </button>
      </div>
    </StyledColorPalette>
  );
};

export default ColorPalatte;
