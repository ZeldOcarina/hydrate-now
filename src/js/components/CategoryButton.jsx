import React from "react";
import styled, { css } from "styled-components";

const StyledCategoryButton = styled.button`
  color: ${({ color }) => color || "#000000"};
  background-color: transparent;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid ${({ color }) => color};
  padding: 1rem;
  cursor: pointer;
  background-image: ${(props) =>
    props.isActive
      ? css`
          linear-gradient(to right, ${props.lightBackgroundColor} 0%, ${props.darkBackgroundColor} 100%);
          color: var(--white);
          border-color: var(--white);
        `
      : "none"};
  //transition: all 0.5s ease-in-out;

  &:hover {
    background-image: linear-gradient(
      to right,
      ${({ lightBackgroundColor }) => lightBackgroundColor} 0%,
      ${({ darkBackgroundColor }) => darkBackgroundColor} 100%
    );
    color: var(--white);
    border: 1px solid var(--white);
  }
`;

const CategoryButton = ({
  children,
  isActive,
  onClick,
  setActiveCategory,
  lightBackgroundColor,
  darkBackgroundColor,
  color,
}) => {
  function handleClick() {
    setActiveCategory(children);
  }

  return (
    <StyledCategoryButton
      isActive={isActive}
      onClick={handleClick}
      lightBackgroundColor={lightBackgroundColor}
      darkBackgroundColor={darkBackgroundColor}
      color={color}>
      {children}
    </StyledCategoryButton>
  );
};

export default CategoryButton;
