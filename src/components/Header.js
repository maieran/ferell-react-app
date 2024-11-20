import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  max-height: 1200px; /* Maximale Breite des Headers */
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 50px;
`;

const NavItem = styled.a`
  position: relative;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
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
    font-weight: 900;
    bottom: -5px; /* Abstand zur Linie */
    left: 50%; /* Startet in der Mitte */
    width: 0; /* Linie ist zunächst nicht sichtbar */
    height: 3px; /* Dicke der Linie -> Schaue ob mit 'bottom' passt */
    background: #fff; /* Farbe der Linie */
    transform: translateX(-50%); /* Positioniert die Linie mittig */
    transition: width 0.5s ease; /* Kontrolliert die Animation der Breite */
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
        <NavItem href="#product">Product</NavItem>
        <NavItem href="#gallery">Gallery</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
