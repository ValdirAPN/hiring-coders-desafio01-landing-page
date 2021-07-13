import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;

  padding: 0 2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;


  .navbar-icons {
    cursor: pointer;

    &:nth-of-type(n + 2) {
      margin-left: 1rem;
    }

    &:hover {
      color: red;
    }

  }
`

export const Logo = styled.span`
  font-weight: 900;
  color: var(--gold);
`