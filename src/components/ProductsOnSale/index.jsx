import { ProductCard } from '../ProductCard';

import * as S from './styled';

import product1 from '../../images/product1.png';
import product2 from '../../images/product2.png';
import product3 from '../../images/product3.png';

export function ProductsOnSale() {
  return (
    <S.Container>
      <ProductCard title="Jeans slim straight fit" productImage={product1} />
      <ProductCard title="Jeans slim straight fit" productImage={product2} />
      <ProductCard title="Jeans skinny com rasgos" productImage={product3} />
    </S.Container>
  );
}