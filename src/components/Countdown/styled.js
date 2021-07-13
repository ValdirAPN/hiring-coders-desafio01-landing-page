import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  background-color: var(--gold);
  text-align: center;
  width: 100vw;

  p {
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: 900;
    color: var(--gray);
  }
`

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 1rem;

  font-size: 5rem;
  font-weight: 900;
  line-height: 5rem;
  color: var(--gray);

  span {
    display: block;
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;

    margin-bottom: 2rem;
  }
`