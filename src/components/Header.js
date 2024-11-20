import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center; /* Zentriert das Logo horizontal */
  align-items: center;
  padding: 20px 50px;
  background: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 10vh;
  min-height:60px;
`;

const Logo = styled.a`
  font-size: 3vh;
  font-family: sans;
  font-weight: bold;
  letter-spacing: 5px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
  position: absolute; /* Das Logo wird absolut zentriert */
  left: 50%; /* Platzierung in der Mitte */
  transform: translateX(-50%); /* Exakte Zentrierung */
  
  &:hover {
    color: #f90;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  margin-left: auto; /* Positioniert die Navigation ganz rechts */
`;

const NavItem = styled.a`
  position: relative;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f90;
  }

  /* Linie unter dem NavItem */
  &:after {
    content: "";
    position: absolute;
    bottom: -5px; /* Abstand zur Linie */
    left: 50%; /* Startet in der Mitte */
    width: 0; /* Linie ist zunächst nicht sichtbar */
    height: 3px; /* Dicke der Linie */
    background: #fff; /* Farbe der Linie */
    transform: translateX(-50%);
    transition: width 0.5s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="/">FERELL</Logo>

      <Nav>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#product">Products</NavItem>
        <NavItem href="#gallery">Gallery</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
