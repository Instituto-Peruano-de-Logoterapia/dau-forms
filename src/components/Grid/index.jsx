'use client'

import { useProducts } from '@app/contexts/hooks'
import React from 'react'

export function Grid() {

  const { currentProducts } = useProducts();



  return (
    <div className='mt-5'>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
        <div className=''>
          item 1
        </div>
      </div>
    </div>
  )
}
