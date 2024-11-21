import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Fade-In Animation für Overlay
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Header-Container
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
  position: fixed; /* Header bleibt immer sichtbar */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Header über allem */
  height: 10vh;
  min-height: 60px;
  background: ${({ isVisible, isHovered }) =>
    isHovered || isVisible ? "rgba(0, 0, 0, 255)" : "rgba(0, 0, 0, 0)"};
  transition: background 0.3s ease-in-out;
`;

// Logo im Zentrum
const Logo = styled.a`
  font-size: 3vh;
  font-family: sans-serif;
  font-weight: bold;
  letter-spacing: 5px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;

  /* Zentrieren des Logos */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    color: #f90;
  }
`;

// Navigation (Desktop)
const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: auto; /* NavItems nach rechts verschieben */

  @media (max-width: 768px) {
    display: none;
  }
`;

// Einzelne NavItems mit Linie darunter
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
    bottom: -5px; /* Linie erscheint direkt unter dem Text */
    left: 50%; /* Startpunkt der Linie ist in der Mitte */
    width: 0; /* Linie ist zuerst nicht sichtbar */
    height: 3px; /* Dicke der Linie */
    background: #fff; /* Farbe der Linie */
    transform: translateX(-50%); /* Zentrierte Linie */
    transition: width 0.3s ease; /* Animiert das Wachsen der Linie */
  }

  &:hover:after {
    width: 100%; /* Linie wächst beim Hover */
  }
`;

// Hamburger-Menü (für Mobile)
const Hamburger = styled.div`
  display: none;

  /* Sichtbarkeit bei kleinen Bildschirmen */
  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;

// Overlay für das Dropdown-Menü
const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85); /* Dunkler Hintergrund */
  z-index: 998;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

// Dropdown-Menü
const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed; /* Fixiert das Dropdown-Menü */
  top: 15vh; /* Startet direkt unter dem Header */
  left: 0;
  width: 100%;
  height: calc(100vh - 15vh); /* Passt sich an die verbleibende Höhe an */
  overflow-y: auto; /* Ermöglicht Scrollen */
  background: #000; /* Hintergrundfarbe des Menüs */
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
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector("#hero-section"); // Hero-Section ID
      const heroBottom = heroElement?.getBoundingClientRect().bottom || 0;

      // Überprüfen, ob der Header den Hero-Abschnitt verlassen hat
      if (heroBottom <= 0) {
        setIsHeaderVisible(true); // Header wird sichtbar (Hintergrund)
      } else {
        setIsHeaderVisible(false); // Header bleibt transparent
      }
    };

    const handleResize = () => {
      if (menuOpen) {
        setMenuOpen(false); // Menü schließen bei Doppelklick auf Browser
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Overlay für das Dropdown-Menü */}
      <Overlay isOpen={menuOpen} onClick={toggleMenu} />

      <HeaderContainer
        isVisible={isHeaderVisible}
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)} // Hover-Effekt aktivieren
        onMouseLeave={() => setIsHovered(false)} // Hover-Effekt deaktivieren
      >
        {/* Hamburger-Menü für Mobile */}
        <Hamburger onClick={toggleMenu}>{menuOpen ? "✖" : "☰"}</Hamburger>

        {/* Logo im Zentrum */}
        <Logo href="/">FERELL</Logo>

        {/* Navigation (Desktop) */}
        <Nav>
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#product">Products</NavItem>
          <NavItem href="#gallery">Gallery</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Nav>

        {/* Dropdown-Menü (Mobile) */}
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
