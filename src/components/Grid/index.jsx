'use client'

import { useProducts } from '@app/contexts/hooks';
import { useEffect } from 'react';
import { GridItem } from '../GridItem';

export function Grid() {
  const {
    currentProducts,
    currentCategory,
    onSetCurrentProducts, gridItems, onSetGridItems } = useProducts();


  useEffect(() => {
    if (currentCategory) {
      onSetCurrentProducts(currentCategory);
    }
  }, [currentCategory]);

  useEffect(() => {
    if (currentProducts) {
      onSetGridItems(currentProducts);
    }
  }, [currentProducts]);

  return (
    <section id='grid-wrapper' className='mt-5 m-auto p-4 w-11/12 md:max-w-4xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          gridItems && gridItems.map(item => <GridItem item={item} key={item.id} />)
        }
      </div>

    </section>
  )
}
