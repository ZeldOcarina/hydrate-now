import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CategoryButton from "./CategoryButton";

const StyledControls = styled.div`
  margin-top: var(--section-gutter);
  color: var(--black);
  display: flex;
  justify-content: space-around;

  .category {
  }
`;

const Controls = ({ cardsData, activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesMap = [];

    categoriesMap.push({
      title: "all ivs",
      lightBackgroundColor: "#38c3ff",
      darkBackgroundColor: "#ff5ecc",
      color: "#000000",
    });

    cardsData.forEach((card) => {
      if (!categoriesMap.find((category) => category.title === card.category)) {
        categoriesMap.push({
          title: card.category,
          lightBackgroundColor: card.backgroundColorLight,
          darkBackgroundColor: card.backgroundColorDark,
          color: card.color,
        });
      }
    });

    setCategories(Array.from(categoriesMap));
  }, []);

  if (categories.length === 0) return "LOADING";

  return (
    <StyledControls>
      {categories.map((category) => {
        return (
          <CategoryButton
            className="category"
            key={category.title}
            isActive={category.title === activeCategory}
            setActiveCategory={setActiveCategory}
            lightBackgroundColor={category.lightBackgroundColor}
            darkBackgroundColor={category.darkBackgroundColor}
            color={category.color}>
            {category.title}
          </CategoryButton>
        );
      })}
    </StyledControls>
  );
};

export default Controls;
