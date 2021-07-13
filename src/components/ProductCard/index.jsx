import * as S from './styled';

export function ProductCard({ title, productImage }) {
  return (
    <S.Card>
      <img src={productImage} alt="" />
      <S.Content>
        <h3>{title}</h3>
        <span className="oldPrice">
          R$ 359,00
        </span>
        <span className="newPrice">
          R$ 199,00
        </span>
      </S.Content>
    </S.Card>
  );
}