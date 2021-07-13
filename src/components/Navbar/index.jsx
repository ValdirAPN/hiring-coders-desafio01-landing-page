import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { IconContext } from "react-icons";

import * as S from './styled'

export function Navbar() {
  return (
    <S.Container>
      <S.Logo className="logo">CHATEAWX.</S.Logo>
      <IconContext.Provider value={{ color: '#938656', className: 'navbar-icons' }} >
        <div>
          <AiOutlineSearch />
          <BsBag />
          <AiOutlineUser />
        </div>
      </IconContext.Provider>
    </S.Container>
  );
}