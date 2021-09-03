import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: calc(100vw - 15px);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 0.6em;
  align-items: center;
  font-weight: 500;
  height: 50px;
  margin-left: auto;
  margin-right: 15vw;
  width: 40vw;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <a href="#">How it works</a>
        <a href="#">Guides</a>
        <a href="#">Examples</a>
        <a href="#">About</a>
      </Nav>
    </StyledHeader>
  );
};
