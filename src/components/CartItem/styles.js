import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  color: var(--black);

  margin-top: .5rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  .productInfo {
    width: 80%;
  }

  h4 {
    width: 100%;
    font-size: 1.5rem;
    line-height: 1.5rem
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: .8rem;
  }

  .trashIcon {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    &:hover {
      background: var(--gold);
      color: #fff;
    }
  }
`;