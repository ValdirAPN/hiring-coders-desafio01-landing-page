import { useState } from 'react';
import * as S from './styled'

export function MailRegistration() {
  const [userEmail, setUserEmail] = useState('');
  
  function handleRegistration() {
    if (userEmail.length >= 7) {
      localStorage.setItem('userEmail', userEmail);
      setUserEmail('');
    }
  }
  
  return (
    <>
      <p>Cadastre-se para receber as promoções</p>
      <S.EmailInput type="email" placeholder="E-mail" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
      <S.Button type="submit" onClick={handleRegistration}>Cadastrar</S.Button>
    </>
  );
}