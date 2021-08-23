import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabArea = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #333b47;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: #282c34;
  width: 500px;
  @media screen and (max-width: 1000px) {
    width: calc(100vw - 10px);
  }
`;

export const Tab = styled.a`
  cursor: pointer;
  border-right: 1px solid #333b47;
  padding: 20px 0;
  font-size: 0.7em;
  font-weight: 500;
  border-bottom: 2px solid #0000;
  height: 100%;
  text-align: center;
  flex-grow: 1;

  :last-child {
    border-right: 0;
  }
`;

export const Footer = styled.footer`
  width: 100%;

  font-weight: 500;
  font-size: 0.8em;
  padding: 20px 40px;
`;

export const Output = styled.pre`
  overflow-x: hidden;
  text-overflow: ellipsis;
  height: 500px;
  background: #22252a;
  font-family: "Fira Mono";
  overflow-y: scroll;
  padding-left: 10px;
  border: 1px solid #333b47;
  font-size: 0.7em;
  line-height: 1.65;
  position: relative;

  &&::-webkit-scrollbar {
    width: 10px;
  }

  &&::-webkit-scrollbar-thumb {
    border-radius: 10px;
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

export const ColorList = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  font-size: 1em;
  width: 500px;
  min-height: calc(100vh - 50px);
  border-radius: 0;
  border-top-left-radius: 0px;
  background: #282c34;
  border-top-right-radius: 0px;
  border: 1px solid #333b47;
  border-top-color: #0000;
  @media screen and (max-width: 1000px) {
    width: calc(100vw - 10px);
  }

  [type="submit"] {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  [type="button"] {
    margin-bottom: 20px;
  }
  label {
    display: flex;
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 0.7em;
    align-items: center;

    span {
      background: #0001;
      &:focus {
        outline: none;
      }
    }

    [type="text"] {
      margin-left: auto;
      border-radius: 0;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 1em;
      background-color: #22252a;
      width: 90px;
      padding: 10px;
      font-family: "Fira Mono";
      border: none;
      color: #abb1bf;
      border: 1px solid #333b47;
      margin-right: 10px;
      &:focus {
        border: 1px solid #333b47;
        outline: none;
      }
    }
  }
  [type="color"] {
    padding: 0;
    width: 45px;
    overflow: hidden;
    height: 45px;
    cursor: pointer;
    border: 1px solid #333b47;
    position: relative;
    border-radius: 0;
    background: none;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: var(--background);
      pointer-events: none;
      height: 100%;
    }
  }
`;
