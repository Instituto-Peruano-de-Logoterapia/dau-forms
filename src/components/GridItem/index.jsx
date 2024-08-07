'use client'

import { useProducts } from '@app/contexts/hooks';
import { inter } from '@app/fonts';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ProfessorIcon, RatingStar } from '..';

function StarsRating() {

    return (
        <React.Fragment>
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
        </React.Fragment>
    )
}

function Tags({ tags }) {

    return (
        <React.Fragment>
            <div className='flex flex-wrap gap-2'>
                {
                    tags && tags.map((tag, _) => <div className={`inline-block border-2 border-blue-400 px-2 text-blue-400 text-[10px]`}>
                        {tag.text}
                    </div>)
                }
            </div>
        </React.Fragment>
    )
}


export function GridItem({ item }) {

    const { onSetCurrentCategory, onSetCurrentProduct } = useProducts();
    const router = useRouter()

    const { constantName } = item;

    const onClickItem = () => {
        if (item.type === "CATEGORY") {
            onSetCurrentCategory(item);
        }

        if (item.type === 'PRODUCT') {
            onSetCurrentProduct(item)
            router.push(`/form/${constantName}`);
        }
    }

    return (
        <div
            onClick={() => onClickItem()}
            className='bg-center shadow-md bg-white bg-cover cursor-pointer rounded-md transition-transform duration-300 ease-in-out transform hover:translate-y-[-4px]  p-4 flex flex-col justify-between gap-5 '>
            <h2 className={`${inter.className} text-md font-bold line-clamp-2`}>
                {item.name}
            </h2>
            <hr className='border-neutral-300' />
            <p className='line-clamp-4 text-sm'>{item.description}</p>
            <div className='flex items-center gap-2'>
                {
                    item.type === 'PRODUCT' && <StarsRating />
                }
                {
                    item.type === 'CATEGORY' && <Tags tags={item.tags} />
                }
            </div>
            <div className='flex items-center gap-2'>
                <ProfessorIcon />
                <small>Dra. Sandra Barbero</small>
            </div>
            <Button

                bgColor={'#60a5fa'}
                borderRadius={'3px'}
                color={'white'}
                _hover={{ bgColor: '#4d98f5' }}>ver más</Button>
        </div>
    )
}
