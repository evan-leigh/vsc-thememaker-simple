import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Footer, TabArea, Tab, Main, Output, ColorList } from "./index.styled";

// Provides sytax highlighting for the code output
function syntaxHighlight(json) {
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,

    function (match) {
      let cls = "number";

      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else if (/:$/.test(match)) {
          cls = "string";
        } else {
          cls = "string";
        }
      } else if (/\/{2}$/.test(match)) {
        cls = "comment";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}

// Updated the icon when the input's HEX changes
function handleChange(event) {
  let input = event.target.previousSibling;
  input.value = event.target.value;
  event.target.style.setProperty("--background", `${event.target.value}`);
}

let output = document.getElementsByTagName("pre");

const defaultValues = {
  "White": "#D5D9E2",
  "Black": "#282c34",
  "Red": "#E06C75",
  "Green": "#98C379",
  "Yellow": "#E5C07B",
  "Orange": "#D19A66",
  "Blue": "#61AFEF",
  "Magenta": "#C678DD",
  "Cyan": "#56B6C2",
  "Error": "#E1606A",
  "Warning": "#E6BD70",
  "Modifed": "#55ABF1",
  "Added": "#92C36F",
  "Accent": "#007EE5",
};

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

    fetch("/template.txt")
      .then((res) => res.text())
      .then((text) => {
        const colorValueList = Array.from(
          document.querySelectorAll('input[type="text"]')
        );

        let userTheme;
        let i = 0;

        // Loops through color
        for (let [value] of Object.entries(defaultValues)) {
          let string = value;
          let reg = new RegExp('"' + string + '"', "g");

          userTheme = text.replace(reg, `"${colorValueList[i].value}"`);

          console.log(
            // This gives me the correct values to
            // replace, but doesn't replace them in userTheme
            `value: ${reg} \n colorListValue: "${colorValueList[i].value}"`
          );

          i++;
        }
        console.log(userTheme);
      });
  }
  return (
    <Main>
      <TabArea>
        <Tab>Color Palette</Tab>
        <Tab>Assign Scopes</Tab>
        <Tab>Editor Settings</Tab>
      </TabArea>

      <ColorList onSubmit={handleSubmit}>
        <label htmlFor="white">
          White
          <input
            required="required"
            type="text"
            onChange={handleChange}
            defaultValue="#D5D9E2"
            placeholder="#000000"
          />
          <input type="color" onChange={handleChange} name="white_hex" />
        </label>
        <label htmlFor="black">
          Black
          <input
            required="required"
            type="text"
            onChange={handleChange}
            defaultValue="#282c34"
            placeholder="#000000"
          />
          <input type="color" onChange={handleChange} />
        </label>
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
            name="util_modified"
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
        <button type="submit" value="submit" readOnly>
          Submit
        </button>
        <button id="copy" type="button" value="copy to 📋" readOnly>
          Copy to 📋
        </button>
        <Output id="output"></Output>
      </ColorList>
      <Footer>
        <h1>copyright © evan-leigh</h1>
      </Footer>
    </Main>
  );
}

export default Index;
