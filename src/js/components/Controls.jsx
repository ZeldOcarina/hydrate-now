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
    const categoriesSet = new Set();
    categoriesSet.add("all ivs");

    cardsData.forEach((card) => {
      categoriesSet.add(card.category);
    });

    setCategories(Array.from(categoriesSet));
  }, []);

  if (categories.length === 0) return "LOADING";

  return (
    <StyledControls>
      {categories.map((category) => {
        return (
          <CategoryButton
            className="category"
            key={category}
            isActive={category === activeCategory}
            setActiveCategory={setActiveCategory}>
            {category}
          </CategoryButton>
        );
      })}
    </StyledControls>
  );
};

export default Controls;
