'use client'

import { useProducts } from '@app/contexts/hooks'
import React from 'react'

export function Banner() {
    const { currentProduct } = useProducts()

    return (
        <div className='my-4'>
            {currentProduct && (
                <img src={`/products/${currentProduct.id}.webp`} alt="banner-producto" className='rounded-md' />
            )}
        </div>
    )
}
