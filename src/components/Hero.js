import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import heroImage from "../assets/logo-ferell.png";
import videoSource from "../assets/Boost_Creativity_Video.mp4"; // Beispiel-Video
import background from "../assets/background.png";

// Styled-Components
const HeroSection = styled.section`
  height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: ${({ isPlaying }) => (isPlaying ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const HeroImage = styled.img`
  max-width: 500px;
  height: auto;
  z-index: 3;
  position: relative;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  font-weight: bold;
`;

const SmallTextContainer = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  z-index: 4;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #777;
  margin-top: 5px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: ${({ progress }) => `${progress}%`};
    background-color: #fff;
    left: 0; /* Startet immer von links */
    transition: width 0.1s linear; /* Glatte Animation für Progress */
  }
`;

const TopTextContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  text-align: left;
  color: #fff;
  z-index: 4;
`;

const TopText = styled.h1`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
`;

const DiscoverButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #fff;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #000;
    background: #fff;
  }
`;

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const updateProgress = () => {
        const currentProgress = (video.currentTime / video.duration) * 100;
        setProgress(currentProgress);
      };

      const handleVideoEnd = () => {
        video.currentTime = 0; // Zurück zum Anfang
        video.play(); // Startet das Video im Loop neu
      };

      video.addEventListener("timeupdate", updateProgress);
      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("timeupdate", updateProgress);
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;

    if (video) {
      setIsPlaying(true);
      video.play();
    }
  };

  return (
    <HeroSection id="hero-section" isPlaying={isPlaying}>
      {/* Video-Hintergrund */}
      <VideoBackground
        ref={videoRef}
        src={videoSource}
        isPlaying={isPlaying}
        muted
      />

      {/* Überschrift und Button */}
      <TopTextContainer>
        <TopText>Boosts your creativity</TopText>
        <DiscoverButton onClick={handlePlay}>Discover</DiscoverButton>
      </TopTextContainer>

      {/* Overlay-Text */}
      {!isPlaying && (
        <OverlayText>
          Welcome to <span style={{ color: "#f90" }}>Ferall Energy</span>
        </OverlayText>
      )}

      {/* Hero-Bild */}
      {!isPlaying && <HeroImage src={heroImage} alt="Ferall Hero" />}

      {/* Linker Text mit Ladebalken */}
      <SmallTextContainer onClick={handlePlay}>
        Boosts your creativity
        <ProgressBar progress={progress} />
      </SmallTextContainer>
    </HeroSection>
  );
};

export default Hero;
