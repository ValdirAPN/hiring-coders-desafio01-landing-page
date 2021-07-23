import { useState } from 'react';

import { products } from '../../service/db';

import { BlackFridayMoldal } from '../../components/BlackFridayModal';
import { ProductCard } from '../../components/ProductCard';

import * as S from './styles';
import { Hero } from '../../components/Hero';

export function Home() {
  const [isBlackFridayModalOpen, setIsBlackFridayModalOpen] = useState(true);

  function handleCloseBlackFridayModal() {
    setIsBlackFridayModalOpen(false);
  }
  return (
    <>
      <S.Container>

        <Hero />

        <S.Products>

          {
            products.map(({ id, name, oldPrice, price, imageUrl }) => {
              return (
                <ProductCard
                  key={id}
                  title={name}
                  productImage={imageUrl}
                  oldPrice={oldPrice}
                  price={price}
                />
              );
            })
          }

        </S.Products>
      </S.Container>

      <BlackFridayMoldal
        isOpen={isBlackFridayModalOpen}
        onRequestClose={handleCloseBlackFridayModal}
      />
    </>
  );
}