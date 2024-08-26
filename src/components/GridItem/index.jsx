'use client'

import { useProducts } from '@app/contexts/hooks';
import { inter } from '@app/fonts';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { RatingStar } from '../Icons';

function Rating() {

    return (
        <React.Fragment>
            <div className='flex gap-2'>
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
            </div>
        </React.Fragment>
    )
}

function Tags({ tags, itemId }) {

    return (
        <React.Fragment>
            <div className='flex flex-wrap gap-2'>
                {
                    tags && tags.map((tag, _) => <div key={`${itemId}-${tag}`} className={`inline-block border-2 border-blue-400 px-2 text-blue-400 text-[10px] font-bold`}>
                        {tag}
                    </div>)
                }
            </div>
        </React.Fragment>
    )
}


export function NewBadge() {
    return (
        <div className='bg-green-500 text-white h-fit px-2 font-bold w-fit absolute -top-2 right-0 flex items-center shadow'>
            <small className='text-xs'>Nuevo</small>
        </div>
    )
}


export function GridItem({ item }) {

    const { onSetCurrentCategory, onSetCurrentProduct } = useProducts();
    const router = useRouter()

    const { constantName, isNew } = item;

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
            className='bg-center shadow-md bg-white bg-cover cursor-pointer rounded-md transition-transform duration-300 ease-in-out transform hover:translate-y-[-4px]  p-4 flex flex-col justify-between gap-5 relative'>
            {
                item.type === 'PRODUCT' && (
                    <React.Fragment>
                        <img className='rounded-md' src={`/products/card-images/${item.id}.webp`} alt="banner" />
                    </React.Fragment>
                )
            }
            <h2 className={`${inter.className} text-md font-bold line-clamp-2`}>
                {item.name}
            </h2>
            <hr className='border-neutral-300' />

            {
                item.type === 'CATEGORY' && (
                    <p className='line-clamp-4 text-sm'>{item.description}</p>
                )
            }

            <div className='flex justify-center flex-col gap-3'>
                {
                    item.type === 'PRODUCT' && (
                        <React.Fragment>
                            <ul className='text-sm'>
                                {
                                    item.categoryId !== 'd6c070ad-5dd7-493b-b316-7251ff95b91c' && (
                                        <React.Fragment>
                                            <li><strong>Inicio:</strong> {item.dateIni}</li>
                                            <li><strong>Hora:</strong> {item.hour}</li>
                                            <li><strong>Duración:</strong> {item.duration}</li>
                                        </React.Fragment>
                                    )
                                }
                                {
                                    item.categoryId === 'd6c070ad-5dd7-493b-b316-7251ff95b91c' && (
                                        <React.Fragment>
                                            <li><strong>Contenido:</strong> {item.content}</li>
                                            <li><strong>Duración:</strong> {item.duration}</li>
                                            <li><strong>Disponible:</strong> {item.available}</li>
                                        </React.Fragment>

                                    )
                                }
                            </ul>
                            <Rating />
                        </React.Fragment>
                    )
                }
                {
                    item.type === 'CATEGORY' && (
                        <React.Fragment>
                            <Tags tags={item.tags} itemId={item.id} />
                        </React.Fragment>
                    )
                }
            </div>
            <Button
                bgColor={'#35c9f7'}
                borderRadius={'3px'}
                color={'white'}
                _hover={{ bgColor: '#3ac0e9' }}>{item.type === 'PRODUCT' ? 'Quiero Inscribirme' : 'Ver productos'}</Button>
            {
                isNew && <NewBadge />
            }
        </div>
    )
}
