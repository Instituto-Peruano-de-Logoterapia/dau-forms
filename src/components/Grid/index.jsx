'use client'

import { GridItem } from '../GridItem';

import { useProducts } from '@app/contexts/hooks';

export function Grid() {

  const { currentProducts, categories } = useProducts();

  return (
    <section id='grid-wrapper' className='mt-5 m-auto w-11/12 md:max-w-4xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          categories.map(categorie => <GridItem item={categorie} key={categorie.id} />)
        }
      </div>
    </section>
  )
}
