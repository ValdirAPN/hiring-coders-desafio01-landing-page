import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  background: #FFF;

  position: fixed;

  padding: 0 2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 1.5rem;
  }
  
  li {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--gold);
    font-weight: 600;

    a {
      color: var(--gold);
    }
  }

  .navbar-icons {
    cursor: pointer;

    &:nth-of-type(n + 2) {
      margin-left: 1rem;
    }

    &:hover {
      color: red;
    }

  }

  .navIcon {
    cursor: pointer;
  }

  .cart {
    position: relative;
  }

  .cartAmount {
    position: absolute;
    right: -.6rem;
    bottom: -.6rem;
    
    background: var(--gold);
    color: var(--gray);

    font-size: .8rem;
    line-height: .8rem;
    font-weight: 900;
    
    min-width: 1rem;
    min-height: 1rem;
    border-radius: 1rem;

    padding: .1rem .1rem .2rem .1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logoutButton {
    background: var(--gold);
    color: #FFF;
    border: 0;
    height: 20px;
    padding: 0 .5rem .1rem .5rem;

    text-transform: uppercase;
    font-weight: 900;
  }

  .user {
    cursor: pointer;
  }
`

export const Logo = styled.span`
  font-weight: 900;
  color: var(--gold);
`