import React from "react";
import styled from "styled-components";

import jsonCards from "../../content/data.json";

import Card from "./Card";

const StyledApp = styled.div`
  color: var(--white);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: var(--title-gutter);
  margin-top: var(--section-gutter);
`;

const App = () => {
  return (
    <StyledApp className="container">
      {jsonCards.map((card, i) => {
        return <Card key={i} {...card} i={i} />;
      })}
    </StyledApp>
  );
};

export default App;
