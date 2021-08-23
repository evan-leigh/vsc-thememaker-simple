import React, { useEffect } from "react";
import { Footer, TabArea, Tab, Main, Output, ColorList } from "./index.styled";
import syntaxHighlight from "./utils/sytax-highlight";
import { SiGithub } from "react-icons/si";
import adjust from "./utils/adjust-color";

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
      console.log(easeInOutQuad(i * -1));
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

let output = document.getElementsByTagName("pre");

function Index() {
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
    <Main>
      <TabArea className="tab-area">
        <Tab>Color Palette</Tab>
        <Tab>Assign Scopes</Tab>
        <Tab>Editor Settings</Tab>
      </TabArea>

      <ColorList id="color" onSubmit={handleSubmit}>
        <label className="shade">
          White -2
          <input
            required="required"
            type="text"
            onChange={handleChangeWhite}
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
            className="white_0"
            defaultValue="#D5D9E2"
            placeholder="#000000"
          />
          <input
            type="color"
            className="white_0"
            onChange={handleChangeWhite}
          />
        </label>

        <label className="shade">
          Black -1
          <input
            required="required"
            type="text"
            onChange={handleChangeBlack}
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
            className="black_1"
            defaultValue="#353941"
            placeholder="#000000"
          />
          <input
            type="color"
            className="black_1"
            onChange={handleChangeBlack}
          />
        </label>

        <label className="shade">
          Black +2
          <input
            required="required"
            type="text"
            onChange={handleChangeBlack}
            className="black_2"
            defaultValue="#42464E"
            placeholder="#000000"
          />
          <input
            type="color"
            className="black_2"
            onChange={handleChangeBlack}
          />
        </label>

        <label className="shade">
          Black +3
          <input
            required="required"
            type="text"
            onChange={handleChangeBlack}
            className="black_3"
            defaultValue="#4F535B"
            placeholder="#000000"
          />
          <input
            type="color"
            className="black_3"
            onChange={handleChangeBlack}
          />
        </label>

        <label className="shade">
          Black +4
          <input
            required="required"
            type="text"
            onChange={handleChangeBlack}
            className="black_4"
            defaultValue="#83878F"
            placeholder="#000000"
          />
          <input
            type="color"
            className="black_4"
            onChange={handleChangeBlack}
          />
        </label>

        <label>
          Black
          <input
            required="required"
            type="text"
            onChange={handleChangeBlack}
            className="black_0"
            defaultValue="#282c34"
            placeholder="#000000"
          />
          <input
            type="color"
            className="black_0"
            onChange={handleChangeBlack}
          />
        </label>

        <br />
        <br />
        <label>
          Red
          <input
            required="required"
            type="text"
            onChange={handleChange}
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
      </ColorList>
      <Footer>
        <a href="https://github.com/evan-leigh/vsc-thememaker-simple">
          <SiGithub />
        </a>
      </Footer>
    </Main>
  );
}

export default Index;
