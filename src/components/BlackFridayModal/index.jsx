import { useState } from 'react';

import Modal from 'react-modal';
import * as S from './styles';
import { GrClose } from 'react-icons/gr';

export function BlackFridayMoldal({ isOpen, onRequestClose }) {
  const [newsEmail, setNewsEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem('newsEmail', newsEmail);
    setNewsEmail('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <GrClose />
      </button>

      <S.Container>
        <h1>Black
          <br />November
          <br /><span>Até 50% Off</span>
        </h1>
        
        <p>Cadastre-se para receber as promoções</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={newsEmail}
            onChange={e => setNewsEmail(e.target.value)}
          />

          <button
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </S.Container>

    </Modal>
  );
}