import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles'

export function Login() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleLogin(e) {
    e.preventDefault();
    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setName('');
    setEmail('');
    setPassword('');

    history.push('/');
    window.location.reload();
  }

  return (
    <S.Container>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Entrar
        </button>

      </form>
    </S.Container>
  );
}