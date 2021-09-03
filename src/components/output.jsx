import React, { useEffect } from "react";
import styled from "styled-components";

const StyledOutput = styled.pre`
  overflow-x: hidden;
  text-overflow: ellipsis;
  height: 500px;
  background: #282c34;
  font-family: monospace;
  overflow-y: scroll;
  margin-top: 20px;
  padding-left: 10px;
  border: 1px solid #333b47;
  font-size: 0.65em;
  line-height: 1.65;
  position: relative;

  span {
    margin-bottom: 20px;
  }

  &&::-webkit-scrollbar {
    width: 15px;
  }

  &&::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    height: 70px;
  }
  .string {
    color: #98c379;
  }
  .key {
    color: #e06c75;
  }
  .comment {
    color: red;
  }
`;

const Output = () => {
  useEffect(() => {
    document.getElementById("copy").onclick = function () {
      let text = document.getElementById("output").textContent;
      navigator.clipboard.writeText(text);
      setTimeout(() => {}, 900);
    };
  });

  return (
    <div id="json">
      <button id="copy" type="button">
        Copy 📋
      </button>
      <StyledOutput id="output"></StyledOutput>
    </div>
  );
};

export default Output;
