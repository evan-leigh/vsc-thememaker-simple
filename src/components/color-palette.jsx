import React, { useEffect } from "react";
import syntaxHighlight from "../utils/sytax-highlight";
import { StyledColorPalette } from "../index.styled";
import { colorNames, options, buttons } from "./color-names";

import ColorSwatch from "./color-swatch";

const $ = document.querySelectorAll.bind(document);

const ColorPalatte = () => {
  const output = document.getElementsByTagName("pre");

  useEffect(() => {
    // Creates an array from every color icon
    const colorIconList = Array.from($('input[type="color"]'));

    colorIconList.forEach((inputIcon) => {
      // Grabs the next sibing's value
      const inputValue = inputIcon.nextElementSibling.value;

      // Matches the color icon to the value in the HEX input
      inputIcon.value = inputValue;

      // Updates the ::after pesudo element's background variable with the adjacent input's value
      inputIcon.style.setProperty("--background", `${inputValue}`);
    });
  });

  function handleSubmit(event) {
    event.preventDefault();
    // Reveals the code output whos display was set to "none"

    fetch("/template.txt")
      .then((response) => response.text())
      .then((text) => {
        let userTheme = text;

        const scopeList = $(".scope-list");
        const scopeHeader = $(".scope-header");

        for (let i = 0; i < scopeList.length; i++) {
          let currentScopeList = scopeList[i].childNodes;

          let string = "";

          function getStyle(scope) {
            let style = "normal";
            scope.style.fontStyle == "" ? null : (style = "italic");
            scope.style.fontWeight == "" ? null : (style = "bold");
            scope.style.textDecoration == "" ? null : (style = "underline");
            return style;
          }

          function getScopes() {
            let italicString = "";
            let boldString = "";
            let underlineString = "";

            currentScopeList.forEach((element) => {
              let ws = '        "';

              switch (getStyle(element)) {
                case "italic":
                  italicString += ws + element.dataset.token + '",\n';
                  string = string.split(ws + element.dataset.token).join("");
                  break;
                case "bold":
                  boldString += ws + element.dataset.token + '",\n';
                  string = string.split(ws + element.dataset.token).join("");
                  break;
                case "underline":
                  underlineString += ws + element.dataset.token + '",\n';
                  string = string.split(ws + element.dataset.token).join("");
                  break;
                case "normal":
                  string += ws + element.dataset.token + '",\n';
                  break;
              }
            });

            return [string, italicString, boldString, underlineString];
          }

          let scopeColor = scopeHeader[i].dataset.color;

          let style = getScopes();

          function printColor(scopes, style) {
            // Replace scope color placeholders in template.txt with the respective color and style that belongs to that scope.
            userTheme = userTheme.replace(
              '"tokenColors": [',
              // Populates at the top of the file.
              '"tokenColors": [' +
                "\n    {" +
                `\n      "name": "${scopeColor}${
                  style == ""
                    ? "" // If the string is empty return nothing, else return the style with the first char capitalized.
                    : " " + style.charAt(0).toUpperCase() + style.slice(1)
                }",` +
                '\n      "scope": [' +
                // FIXME: having white space added to this string would be preffered, looks better.
                // FIXME: having white space added to this string would be preffered, looks better.
                `\n${scopes.replace(/,\n$/, "")}` +
                "\n      ]," +
                '\n      "settings": {' +
                `\n        "foreground": "[${scopeColor}]",` +
                `\n        "fontStyle": "${style}"` +
                "\n      }" +
                "\n    },"
            );
          }

          let scopeStyle = "italic";
          if (style[1] !== "") {
            printColor(style[1], scopeStyle);
          }

          scopeStyle = "bold";
          if (style[2] !== "") {
            printColor(style[2], scopeStyle);
          }

          scopeStyle = "underline";
          if (style[3] !== "") {
            printColor(style[3], scopeStyle);
          }

          scopeStyle = "";
          if (style[0] !== "") {
            printColor(style[0], scopeStyle);
          }
        }

        const colorHexValue = Array.from($('[type="text"].color'));
        const optionHexValue = Array.from($('[type="text"].option'));
        const buttonHexValue = Array.from($('[type="text"].button'));

        for (let i = 0; i < colorNames.length; i++) {
          userTheme = userTheme.replace(new RegExp('"\\[' + colorNames[i] + "\\]", "g"), `"${colorHexValue[i].value}`);
        }

        for (let i = 0; i < options.length; i++) {
          userTheme = userTheme.replace(new RegExp('"\\[' + options[i] + "\\]", "g"), `"${optionHexValue[i].value}`);
        }

        for (let i = 0; i < buttons.length; i++) {
          userTheme = userTheme.replace(new RegExp('"\\[' + buttons[i] + "\\]", "g"), `"${buttonHexValue[i].value}`);
        }

        output[0].innerHTML = syntaxHighlight(userTheme);
      });
  }
  return (
    <StyledColorPalette onSubmit={handleSubmit}>
      <h1 style={{ width: "100%" }}>Editor</h1>

      <ColorSwatch className="white-dark color" hex="#adb1ba">
        White -20
      </ColorSwatch>

      <ColorSwatch className="white_0 color" hex="#d5d9e2">
        White
      </ColorSwatch>

      <ColorSwatch className="black-dark color" hex="#23272f">
        Black -20
      </ColorSwatch>

      <ColorSwatch className="black_1 color" hex="#30343c">
        Black 10
      </ColorSwatch>

      <ColorSwatch className="black_2 color" hex="#3a3e46">
        Black 20
      </ColorSwatch>

      <ColorSwatch className="black_3 color" hex="#484c54">
        Black 30
      </ColorSwatch>

      <ColorSwatch className="black_4 color" hex="#5a5e66">
        Black 40
      </ColorSwatch>

      <ColorSwatch className="black_0 color" hex="#282C34">
        Black
      </ColorSwatch>

      <h1 style={{ width: "100%" }}>Syntax Colors</h1>
      <ColorSwatch hex="#e06c75" className="red color">
        Red
      </ColorSwatch>

      <ColorSwatch hex="#98C379" className="green color">
        Green
      </ColorSwatch>

      <ColorSwatch hex="#E5C07B" className="yellow color">
        Yellow
      </ColorSwatch>

      <ColorSwatch hex="#D19A66" className="orange color">
        Orange
      </ColorSwatch>

      <ColorSwatch hex="#61AFEF" className="blue color">
        Blue
      </ColorSwatch>

      <ColorSwatch hex="#C678DD" className="magenta color">
        Magenta
      </ColorSwatch>

      <ColorSwatch hex="#56B6C2" className="cyan color">
        Cyan
      </ColorSwatch>

      <h1 style={{ width: "100%" }}>Source Control</h1>
      <ColorSwatch hex="#e06c75" className="error color">
        Error
      </ColorSwatch>

      <ColorSwatch hex="#e5c07b" className="warning color">
        Warning
      </ColorSwatch>

      <ColorSwatch hex="#61afef" className="modifed color">
        Modified
      </ColorSwatch>

      <ColorSwatch hex="#98c379" className="added color">
        Added
      </ColorSwatch>

      <h1 style={{ width: "100%" }}>Accent Colors</h1>
      <ColorSwatch hex="#007EE5" className="accent color">
        Accent
      </ColorSwatch>

      <h1 style={{ width: "100%" }}>Options</h1>
      <ColorSwatch hex="#007EE5" className="cursor option">
        Cursor
      </ColorSwatch>

      <ColorSwatch hex="#d5d9e2" className="cursor-text option">
        Cursor Text
      </ColorSwatch>

      <ColorSwatch hex="#007EE5" className="tab-border option">
        Tab Border
      </ColorSwatch>

      <ColorSwatch hex="#007EE5" className="list-highlight option">
        List Highlight
      </ColorSwatch>

      <ColorSwatch hex="#b8ceff" className="find-match option">
        Find Match
      </ColorSwatch>

      <ColorSwatch hex="#007EE5" className="widget-sash option">
        Widget Sash
      </ColorSwatch>

      <h1 style={{ width: "100%" }}>Buttons</h1>
      <ColorSwatch hex="#007EE5" className="primary-background button">
        Primary Background
      </ColorSwatch>

      <ColorSwatch hex="#ABB1BF" className="primary-foreground button">
        Primary Foreground
      </ColorSwatch>

      <ColorSwatch hex="#333b47" className="secondary-background button">
        Secondary Background
      </ColorSwatch>

      <ColorSwatch hex="#d5d9e2" className="secondary-foreground button">
        Secondary Foreground
      </ColorSwatch>

      <h1 style={{ width: "100%" }}></h1>
      <div>
        <button type="submit" value="submit" readOnly>
          Submit
        </button>
      </div>
    </StyledColorPalette>
  );
};

export default ColorPalatte;
