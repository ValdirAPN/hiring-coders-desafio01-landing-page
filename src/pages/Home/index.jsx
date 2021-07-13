import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Countdown } from '../../components/Countdown';
import { Footer } from '../../components/Footer';

import * as S from './styled';
import { ProductsOnSale } from '../../components/ProductsOnSale';

export function Home() {
  return (
    <S.Container>
      <Navbar />
      <Hero />
      <ProductsOnSale />
      <Countdown />
      <Footer />
    </S.Container>
  );
}