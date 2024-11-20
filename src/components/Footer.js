import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 20px;
  text-align: center;

  a {
    color: #f90;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Ferall. All Rights Reserved.</p>
      <a href="#privacy">Privacy Policy</a>
    </FooterContainer>
  );
};

export default Footer;
