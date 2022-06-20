import React from "react";
import styled from "styled-components";
import { CSSTransitionGroup } from "react-transition-group";

import jsonCards from "../../content/data.json";

import Card from "./Card";
import Controls from "./Controls";

const StyledApp = styled.div`
  color: var(--white);

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    gap: var(--title-gutter);
    margin-top: var(--section-gutter);
  }
`;

const App = () => {
  const [activeCategory, setActiveCategory] = React.useState("all ivs");

  return (
    <StyledApp className="container">
      <Controls
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cardsData={jsonCards}
      />
      <div className="cards-container">
        {jsonCards.map((card) => {
          if (
            activeCategory === "all ivs" ||
            card.category === activeCategory
          ) {
            return <Card key={card.id} {...card} />;
          }
        })}
      </div>
    </StyledApp>
  );
};

export default App;
