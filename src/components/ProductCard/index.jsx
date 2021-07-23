import { useCart } from '../../hooks/useCart';
import * as S from './styles';

export function ProductCard({ title, productImage, oldPrice, price }) {
  const { addToCart } = useCart();
  
  function handleAddToCart() {
    addToCart({
      title,
      productImage,
      price
    });
  }

  return (
    <S.Card>
      <img src={productImage} alt="" />
      <S.Content>
        <h3>{title}</h3>
        <div className="price">
          {
            oldPrice && <span className="oldPrice">R$ {oldPrice}</span>
          }
          
          <span className="newPrice">
            R$ {price}
          </span>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
        >
          Comprar
        </button>
      </S.Content>
    </S.Card>
  );
}