import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --black: #030303;
    --gray: #ECECEC;
    --gold: #938656;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1rem;
    line-height: 1rem;

    color: var(--black);
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  section {
    min-height: calc(100vh - 9rem);
    margin: 0 auto;
  }

  input {
    width: calc(min(300px, 40vw));
    height: 3rem;
    padding: 0 1rem;
    background: var(--gray);
    border: 1px solid var(--black);
  
    margin-top: 1rem;
  }

  form {
    button {      
      height: 3rem;
      border: 0;
      padding: 0 1rem;
      
      background: var(--black);
      color: var(--gray);
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  // MODAL
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 500px;
    background: var(--gray);
    padding: 2rem;
    position: relative;
  }

  .react-modal-close {
    position: absolute;
    right: .5rem;
    top: .5rem;

    border: 0;

    transition: .2s;
    
    &:hover {
      transform: scale(1.1);
    }
  }


  // SCROLL

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--gray);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--gold);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #6b613c;
  }

`;