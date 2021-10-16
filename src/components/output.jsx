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
  width: 70vw;
  height: 70vh;
  position: relative;

  .string {
    color: #98c379;
  }
  .key {
    color: #e06c75;
  }

  /* width */
  &&::-webkit-scrollbar {
    width: 20px;
    box-sizing: content-box;
  }

  /* Track */
  &&::-webkit-scrollbar-track {
    background: #282c34;
  }

  /* Handle */
  &&::-webkit-scrollbar-thumb {
    background: #b8ceff60;
    height: 90px;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  /* Handle on hover */
  &&::-webkit-scrollbar-thumb:hover {
    background: #b8ceff80;
    background-clip: content-box;
  }
`;

const Output = () => {
  useEffect(() => {
    document.getElementById("copy").onclick = function () {
      let text = document.getElementById("output").textContent;
      navigator.clipboard.writeText(text);
      this.textContent = "Copied! ✅";
      setTimeout(() => {
        this.textContent = "Copy 📋";
      }, 1000);
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
