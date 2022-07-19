import React from "react";
import styled from "styled-components";

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

  // MAKE ENERGY AND IMMUNITY THE FIRST CATEGORY TO APPEAR
  const energyData = jsonCards.filter(
    (item) => item.category === "Energy and Immunity"
  );
  const otherCategories = jsonCards.filter(
    (item) => item.category !== "Energy and Immunity"
  );

  const newCardsData = [...energyData, ...otherCategories];

  console.log(newCardsData);

  return (
    <StyledApp className="container">
      <Controls
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cardsData={newCardsData}
      />
      <div className="cards-container">
        {newCardsData.map((card) => {
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
