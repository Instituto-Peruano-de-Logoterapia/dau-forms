'use client'

import { inter } from '@app/fonts';
import React from 'react'

export function GridItem({ item }) {

    return (
        <div className='bg-white pb-[100%] bg-center relative bg-cover shadow-lg'>
            <div className='absolute inset-0 flex flex-col p-4'>
                <div className='text-container text-left mt-5'>
                    <h2 className={`${inter.className} text-md font-bold line-clamp-2`}>
                        {item.name}
                    </h2>
                </div>
            </div>
        </div>
    )
}
