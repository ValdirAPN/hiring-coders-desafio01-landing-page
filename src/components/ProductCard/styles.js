import styled from "styled-components";

export const Card = styled.div`
  background: var(--gray);

  img {
    width: 100%;
    height: 380px;
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
    margin-right: 1rem;
  }

  .newPrice {
    background: var(--gold);
    color: var(--gray);
    padding: 0 0.5rem;
  }

  button {
    background: var(--black);
    color: var(--gray);
    border: 0;

    height: 50px;
    width: 100%;
    margin-top: 1.5rem;

    text-transform: uppercase;
    font-weight: 900;
    padding: 0 1rem;
  }
`