'use client'

import { useProducts } from '@app/contexts/hooks';
import { inter } from '@app/fonts';
import { Button } from '@chakra-ui/react';
import React from 'react'

export function GridItem({ item }) {

    const { onSetCurrentCategory } = useProducts();

    const onClickItem = () => {
        if (item.type === "CATEGORY") {
            onSetCurrentCategory(item);
        }
    }

    return (
        <div
            onClick={() => onClickItem()}
            className='bg-center   bg-cover cursor-pointer rounded-md transition-transform duration-300 ease-in-out transform hover:translate-y-[-4px] border-2 border-blue-200 p-4 flex flex-col justify-between gap-5 '>
            <h2 className={`${inter.className} text-md font-bold line-clamp-2`}>
                {item.name}
            </h2>
            <p className='line-clamp-4 text-sm'>{item.description}</p>
            <Button bgColor={'#60a5fa'} borderRadius={0} color={'white'} _hover={{ bgColor: '#4d98f5' }}>ver más</Button>
        </div>
    )
}
