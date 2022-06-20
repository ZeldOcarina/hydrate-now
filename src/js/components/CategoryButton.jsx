import React from "react";
import styled, { css } from "styled-components";

const StyledCategoryButton = styled.button`
  background-color: transparent;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid var(--black);
  padding: 1rem;
  cursor: pointer;
  background-image: ${(props) =>
    props.isActive
      ? css`
          linear-gradient(to right, #ff5ecc 0%, #38c3ff 100%);
          color: var(--white);
          border-color: var(--white);
        `
      : "none"};
  //transition: all 0.5s ease-in-out;

  &:hover {
    background-image: linear-gradient(to right, #ff5ecc 0%, #38c3ff 100%);
    color: var(--white);
    border: 1px solid var(--white);
  }
`;

const CategoryButton = ({ children, isActive, onClick, setActiveCategory }) => {
  function handleClick() {
    setActiveCategory(children);
  }

  return (
    <StyledCategoryButton isActive={isActive} onClick={handleClick}>
      {children}
    </StyledCategoryButton>
  );
};

export default CategoryButton;
