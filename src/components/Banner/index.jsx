import React from 'react'

export function Banner({ idProduct }) {

    return (
        <div className='my-12'>
            <img src={`/products/${idProduct}.webp`} alt="banner-producto"  className='rounded-md'/>
        </div>
    )
}
