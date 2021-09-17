import React, { useEffect } from "react";
import styled from "styled-components";

const StyledOutput = styled.pre`
  overflow-x: hidden;
  text-overflow: ellipsis;
  background: #282c34;
  font-family: monospace;
  overflow-y: scroll;
  margin-top: 20px;
  padding-left: 10px;
  border: 1px solid #333b47;
  font-size: 0.65em;
  line-height: 1.65;
  width: calc( 70vw - 50px );
  height: 100vh;
  position: relative;

  .string {
    color: #98c379;
  }
  .key {
    color: #e06c75;
  }
  .comment {
    color: red;
  }

  &&::-webkit-scrollbar {
      width: 2em;
      height: 2em
  }

  &&::-webkit-scrollbar-button {
      background: #ccc
  }

  &&::-webkit-scrollbar-track-piece {
      background: #888
  };

  &&::-webkit-scrollbar-thumb {
      background: #eee
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
