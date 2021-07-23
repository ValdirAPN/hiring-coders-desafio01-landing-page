import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  input {
    width: 100%;
    
    & + input {
      margin-top: 1rem;
    };
  }

  button {
    width: 100%;
    margin-top: 1rem;
  }
`;