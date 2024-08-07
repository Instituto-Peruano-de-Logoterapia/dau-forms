'use client'

import { useEffect, useState } from 'react';
import { GridItem } from '../GridItem';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useProducts } from '@app/contexts/hooks';

export function Grid() {
  const {
    currentProducts,
    categories,
    currentCategory,
    onSetCurrentProducts,
    onSetCurrentCategory,
    onSetProducts } = useProducts();
  const [gridItems, setGridItems] = useState(categories);


  const reset = () => {
    onSetCurrentCategory(null);
    onSetProducts(null);
    setGridItems(categories);
  }

  useEffect(() => {
    if (currentCategory) {
      onSetCurrentProducts(currentCategory);
    }
  }, [currentCategory]);

  useEffect(() => {
    if (currentProducts) {
      setGridItems(currentProducts);
    }
  }, [currentProducts]);

  return (
    <section id='grid-wrapper' className='mt-5 m-auto p-4 w-11/12 md:max-w-4xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          gridItems && gridItems.map(item => <GridItem item={item} key={item.id} />)
        }
      </div>
      {
        currentCategory && (
          <div className='flex justify-end mt-10'>
            <Button bg={'white'} borderRadius={'unset'} border={'1px'} borderColor={'white'} onClick={reset}>
              <ArrowBackIcon />
              <span className='ml-2'>Regresar</span>
            </Button>
          </div>
        )
      }
    </section>
  )
}
