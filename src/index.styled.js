import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  font-size: 22px;
  flex-direction: column;
  align-items: center;
`;

export const EditorPreviewContainer = styled.div`
  width: calc(100vw - 10px);
  display: grid;
  place-items: center;
`;

export const EditorPreview = styled.div`
  background-color: black;
  width: 70%;
  background: #282c34;
  border: 1px solid #333b47;
  border-radius: 8px;
  margin-bottom: 100px;
  margin-top: 100px;
  min-height: 400px;
  height: 40vw;
`;

export const TabArea = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  text-align: center;
  margin-right: auto;
  background: #282c34;
  border: 1px solid #333b47;
  border-top: none;
  border-bottom: none;
  margin: 0 auto;
  width: 70vw;
`;

export const Panel = styled.div`
  border: 1px solid #333b47;
  background: #282c34;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #0000;
  width: 70vw;
`;

export const Tab = styled.a`
  cursor: pointer;
  background: #22252a;
  border-right: 1px solid #333b47;
  padding: 20px 0;
  font-weight: 500;
  border-bottom: 1px solid #333b47;
  border-top: 1px solid #333b47;
  font-size: 0.65em;
  height: 100%;
  flex-grow: 1;

  &&:last-child {
    border-right: 1px solid #0000;
  }
`;

export const Footer = styled.footer`
  width: calc(100vw - 10px);
  border-top: 1px solid #333b47;
  transform: translateY(-1px);
  font-weight: 500;
  margin-top: 200px;
  font-size: 0.8em;
  padding: 20px 40px;
`;

export const Output = styled.pre`
  overflow-x: hidden;
  text-overflow: ellipsis;
  height: 500px;
  background: #22252a;
  font-family: monospace;
  overflow-y: scroll;
  margin-top: 20px;
  padding-left: 10px;
  border: 1px solid #333b47;
  font-size: 0.65em;
  line-height: 1.65;
  position: relative;

  &&::-webkit-scrollbar {
    width: 10px;
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
