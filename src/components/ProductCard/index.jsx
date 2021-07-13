import * as S from './styled';

export function ProductCard({ title, productImage, oldPrice, newPrice }) {
  return (
    <S.Card>
      <img src={productImage} alt="" />
      <S.Content>
        <h3>{title}</h3>
        <span className="oldPrice">
          R$ {oldPrice}
        </span>
        <span className="newPrice">
          R$ {newPrice}
        </span>
      </S.Content>
    </S.Card>
  );
}