import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;

  width: calc(min(400px, 80vw));
  min-height: 100px;
  max-height: 600px;
  overflow-y: auto;
  padding: 1rem;

  background: #FFF;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid var(--gold);

  h3 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;

    margin-bottom: 1rem;
  }

  .total {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 2rem;

    text-transform: uppercase;

    border-top: 1px solid var(--gold);

    padding-top: .5rem;
    
    p {
      display: inline-block;
      font-weight: 900;
      margin-right: 1rem;
    }
  }
`;