import { useCart } from '../../hooks/useCart';
import { CartItem } from '../CartItem'
import * as S from './styles'

export function Cart() {
  const {cartItems} = useCart();
  
  return (
    <S.Container>
      <h3>Carrinho de Compras</h3>
      {
        cartItems.map(
          ({id, title, productImage, price}, index) => (
            <CartItem
              key={id}
              title={title}
              productImage={productImage}
              price={price}
              index={index}
            />
          )
        )
      }
      <div className="total">
        <p>Total:</p>
        <span>
          R$ {
            cartItems.reduce((acc, cardItem) => acc + Number(cardItem.price), 0)
          }
        </span>
      </div>
    </S.Container>
  );
}