import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa'

import * as S from './styled';

export function Footer() {
  return (
    <S.Footer>
      Developed by Valdir Aires
      <IconContext.Provider  value={{ color: '#ECECEC', size: '20'}}>
        <a href="https://github.com/valdirapn" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://linkedin.com/in/valdirpn" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>     
      </IconContext.Provider>
    </S.Footer>
  );
}