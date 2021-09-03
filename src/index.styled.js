import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  font-size: 22px;
  flex-direction: column;
  align-items: center;
`;

export const EditorPreviewContainer = styled.div`
  width: calc(100vw - 15px);
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
  margin-top: 80px;
  width: 70vw;
`;

export const StyledColorPalette = styled.form`
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
  width: calc(100vw - 15px);
  border-top: 1px solid #333b47;
  transform: translateY(-1px);
  font-weight: 500;
  margin-top: 200px;
  font-size: 0.8em;
  padding: 20px 40px;
`;
