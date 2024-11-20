import React from "react";
import styled from "styled-components";

const ProductSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 300px;
  text-align: left;

  h3 {
    font-size: 1.25rem;
    color: #f90;
    margin-bottom: 10px;
  }

  p {
    color: #555;
  }
`;

const ProductHighlight = () => {
  return (
    <ProductSection>
      <Title>Why Ferall?</Title>
      <Features>
        <FeatureCard>
          <h3>Natural Ingredients</h3>
          <p>Only the best organic ingredients for a clean energy boost.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Peak Performance</h3>
          <p>Designed to keep you focused and energized all day.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Refreshing Taste</h3>
          <p>A perfect balance of flavor and function.</p>
        </FeatureCard>
      </Features>
    </ProductSection>
  );
};

export default ProductHighlight;