import styled from "styled-components";

export const Container = styled.section`
  max-width: 1380px;
  margin: 0 auto;
  padding: 2rem;
`

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
`;