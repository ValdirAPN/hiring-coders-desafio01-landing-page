import { FiTrash } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';

import * as S from './styles'

export function CartItem({ title, productImage, price, index }) {
  const { removeFromCart } = useCart();

  return (
    <S.Container>
      <img src={productImage} alt="" />
      <div className="productInfo">
        <h4>{title}</h4>
        <p>R$ {price}</p>
      </div>
      <div className="trashIcon" onClick={() => removeFromCart(index)} >
        <FiTrash />
      </div>
    </S.Container>
  );
}