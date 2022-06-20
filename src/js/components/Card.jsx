import React from "react";
import styled from "styled-components";

const imageRootUrl = process.env.AWS_URL;

const StyledCard = styled.article`
  background-image: linear-gradient(
    90deg,
    var(--color-secondary) 0%,
    var(--color-primary) 100%
  );
  padding: 2rem;
  border-radius: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: flex-end;
  height: 30rem;

  h3 {
    color: var(--white);
    text-align: left;
    margin: 0 0 1rem 0;
  }

  .left-part {
    text-align: left;
    width: 200px;
    align-self: baseline;
    margin-top: var(--gutter);
  }

  .bag {
    width: 100%;
  }

  .price {
    font-weight: 700;
    font-size: 2rem;
  }

  .category {
    border: 1px solid var(--white);
    font-size: 1.7rem;
    text-transform: uppercase;
    color: var(--white);
    font-weight: 200;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    margin-bottom: var(--gutter);
    text-align: center;
  }
`;

const Card = ({ monarchyTitle, price, id, category }) => {
  return (
    <StyledCard>
      <div className="left-part">
        <h6 className="category">{category}</h6>
        <h3>{monarchyTitle}</h3>
        <p className="price">{`$${price}`}</p>
      </div>
      <img
        className="bag"
        src={`${imageRootUrl}${id}.png`}
        alt={monarchyTitle}
      />
    </StyledCard>
  );
};

export default Card;
