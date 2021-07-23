import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60%;
    height: 100%;
    object-fit: cover;
  }

  .textContent {
    width: 40%;
    margin-left: 2rem;

    h1 {
      text-transform: uppercase;
      font-size: 4rem;
      line-height: 3.5rem;
    }

    p {
      max-width: 300px;
      margin-top: 1rem;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }

  @media(max-width: 900px) {
    height: 100%;
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 100%;
    }

    h1 {
      font-size: 3rem;
    }
    
    .textContent {
      width: 100%;
      margin: 3rem 0 5rem;
    }
  }
`;