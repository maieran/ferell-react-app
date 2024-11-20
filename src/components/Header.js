import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 10vh;
  min-height: 60px;
`;

const Logo = styled.a`
  font-size: 3vh;
  font-family: sans;
  font-weight: bold;
  letter-spacing: 5px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;

  position: absolute; /* Logo immer zentriert */
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    color: #f90;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f90;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 3px;
    background: #fff;
    transform: translateX(-50%);
    transition: width 0.5s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  /* Hamburger wird bei kleiner Bildschirmgröße angezeigt */
  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 998;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 15vh; /* Soll direkt unterm Header auftauchen */
  left: 0;
  width: 100vw;
  height: calc(100vh - 15vh);
  overflow-y: auto; /* Ermöglicht Scrollen */
  background: #000;
  padding: 20px 10px;
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 2rem; /* Große Schrift für NavItems */
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px 0;

    &:hover {
      color: #f90;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (menuOpen) {
        setMenuOpen(false);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Overlay für dunklen Hintergrund */}
      <Overlay isOpen={menuOpen} onClick={toggleMenu} />

      <HeaderContainer>
        {/* Hamburger-Button links */}
        <Hamburger onClick={toggleMenu}>{menuOpen ? "✖" : "☰"}</Hamburger>

        {/* Logo zentriert */}
        <Logo href="/">FERELL</Logo>

        {/* Navigation rechts */}
        <Nav>
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#product">Products</NavItem>
          <NavItem href="#gallery">Gallery</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Nav>

        {/* Dropdown-Menü */}
        <DropdownMenu isOpen={menuOpen}>
          <NavItem href="#home" onClick={toggleMenu}>
            Home
          </NavItem>
          <NavItem href="#product" onClick={toggleMenu}>
            Products
          </NavItem>
          <NavItem href="#gallery" onClick={toggleMenu}>
            Gallery
          </NavItem>
          <NavItem href="#contact" onClick={toggleMenu}>
            Contact
          </NavItem>
        </DropdownMenu>
      </HeaderContainer>
    </>
  );
};

export default Header;
