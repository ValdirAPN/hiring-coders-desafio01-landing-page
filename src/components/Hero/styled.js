import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;

  text-transform: uppercase;

  font-size: 4rem;
  line-height: 5rem;

  padding: 10rem 0;

  span {
    display: block;
    font-weight: 400;
    color: var(--gold);
  }

  @media(max-width: 680px) {
    font-size: 2rem;
    line-height: 3rem;
    padding: 6rem 0;
  }
`