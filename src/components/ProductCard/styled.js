import styled from "styled-components";

export const Card = styled.div`
  background: var(--gray);

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`

export const Content = styled.div`
  padding: 2rem;

  h3 {
    text-transform: uppercase;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .oldPrice {
    text-decoration: line-through;
  }

  .newPrice {
    background: var(--gold);
    color: var(--gray);
    margin-left: 1rem;
    padding: 0 0.5rem;
  }
`