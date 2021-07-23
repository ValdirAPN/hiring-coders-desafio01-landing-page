import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import { Cart } from '../Cart';

import { AiOutlineUser } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';

import * as S from './styles'

export function Navbar() {
  const { cartItems } = useCart();

  const [user, setUser] = useState(localStorage.getItem('name'));
  const [showCart, setShowCart] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  function handleShowCart() {
    setShowCart(!showCart);
  }

  function handleShowLogout() {
    if (user) {
      setShowLogout(!showLogout);
    }
  }
  
  function handleLogout() {
    setUser('');
    localStorage.setItem('name', '');
  }
  
  return (
    <S.Container>
      <Link to="/">
        <S.Logo className="logo">CHATEAWX.</S.Logo>
      </Link>
      <ul>

        <li className="user" onClick={handleShowLogout}>
          <AiOutlineUser className="navIcon" />
          {
            user ? <span>{`Olá, ${user}`}</span> :
              <Link to="/login">
                Entrar
              </Link>
          }

          {
            showLogout && <button className="logoutButton" onClick={handleLogout}>Sair</button>
          }
        </li>


        <li className="cart" >
          <BsBag onClick={handleShowCart} className="navIcon" />
          <div className="cartAmount">
            {
              cartItems ? cartItems.reduce((acc) => acc + 1, 0) : 0
            }
          </div>
          {
            showCart && <Cart />
          }
        </li>
      </ul>
    </S.Container>
  );
}