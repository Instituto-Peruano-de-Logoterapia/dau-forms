'use client'

import { inter } from '@app/fonts';
import React from 'react'

export function GridItem({ item }) {

    return (
        <div className='bg-white pb-[100%] bg-center relative bg-cover bg-[url("https://fakeimg.pl/400x400/")]'>
            <div className='absolute inset-0 flex flex-col justify-center p-3'>
                <div className='text-container text-center'>
                    <h2 className={`${inter.className} text-md font-bold line-clamp-2`}>
                        {item.name}
                    </h2>
                    <p className='line-clamp-4'>{item.description}</p>
                </div>
            </div>
        </div>
    )
}
