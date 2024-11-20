import React from "react";
import styled from "styled-components";
//import heroImage from "../assets/ferell-heroimage.png";
import heroImage from "../assets/logo-ferell.png";
import background from "../assets/background.png";

// Styled-Components für Hero-Bereich
const HeroSection = styled.section`
  height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`;

const HeroImage = styled.img`
  max-width: 500px; /* Passe die Breite des Hero-Images an */
  height: auto;
  z-index: 2; /* Damit das Bild über dem Hintergrund ist */
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  font-weight: bold;
`;

const Hero = () => {
  return (
    <HeroSection>
      <OverlayText>
        Welcome to <span style={{ color: "#f90" }}>Ferall Energy</span>
      </OverlayText>
      <HeroImage src={heroImage} alt="Ferall Hero" />
    </HeroSection>
  );
};

export default Hero;
