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
    width: 100vw;
  }
`;

export const Tab = styled.div`
  cursor: pointer;
  font-size: 13px;
  border-right: 1px solid #333b47;
  font-size: 11px;
  line-height: 4.5;
  height: 100%;
  text-align: center;
  flex-grow: 1;

  :last-child {
    border-right: 0;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  font-size: 11px;
  padding: 20px 40px;
`;

export const Output = styled.pre`
  overflow-x: hidden;
  text-overflow: ellipsis;
  max-height: 500px;
  overflow-y: scroll;
  display: none;
  font-size: 11px;
  line-height: 1.65;
  position: relative;

  &&::-webkit-scrollbar {
    width: 10px;
  }

  &&::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    height: 40px;
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
  font-size: 13px;
  width: 500px;
  min-height: calc(100vh - 50px);
  border-radius: 0;
  border-top-left-radius: 0px;
  background: #282c34;
  border-top-right-radius: 0px;
  border: 1px solid #333b47;
  border-top-color: #0000;
  @media screen and (max-width: 1000px) {
    width: 100vw;
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
    margin-bottom: 7px;
    font-size: 11px;

    span {
      background: #0001;
      &:focus {
        outline: none;
      }
    }

    [type="text"] {
      margin-left: auto;
      border-radius: 0;
      text-transform: uppercase;
      font-size: 11px;
      background-color: #22252a;
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
    width: 23px;
    overflow: hidden;
    height: 23px;
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
