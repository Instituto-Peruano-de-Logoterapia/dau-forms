'use client'

import { Banner, SignProductForm } from '@app/components';
import { useProducts } from '@app/contexts/hooks';
import { products } from '@app/data';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';


export function PageContent({ productName }) {

    const { onSetCurrentProduct, currentProduct } = useProducts()

    useEffect(() => {
        const productSelected = products.find(product => product.constantName === productName)
        onSetCurrentProduct(productSelected);
    }, []);


    return (
        <div className='flex flex-col gap-4 px-4'>
            <Banner />

            <div className='bg-white shadow-md p-5 md:p-16 mb-9 rounded-sm text-black '>
                <Text className='text-xl md:text-3xl text-center font-bold leading-tight text-blue-500 uppercase mb-2' as={'h1'}>Acerca del Producto</Text>
                {
                    currentProduct && (
                        <React.Fragment>
                            <Text textAlign={'center'}>
                                {
                                    currentProduct.description && currentProduct.description
                                }
                            </Text>
                            <ul className='flex justify-center mt-10 flex-col gap-3 items-center'>
                                {
                                    currentProduct.categoryId !== 'd6c070ad-5dd7-493b-b316-7251ff95b91c' && (
                                        <React.Fragment>
                                            <li><strong>Inicio:</strong> {currentProduct.dateIni}</li>
                                            <li><strong>Hora:</strong> {currentProduct.hour}</li>
                                            <li><strong>Duración:</strong> {currentProduct.duration}</li>
                                        </React.Fragment>
                                    )
                                }
                                {
                                    currentProduct.categoryId === 'd6c070ad-5dd7-493b-b316-7251ff95b91c' && (
                                        <React.Fragment>
                                            <li><strong>Contenido:</strong> {currentProduct.content}</li>
                                            <li><strong>Duración:</strong> {currentProduct.duration}</li>
                                            <li><strong>Disponible:</strong> {currentProduct.available}</li>
                                        </React.Fragment>

                                    )
                                }
                            </ul>
                        </React.Fragment>
                    )
                }
            </div>
            <div className='bg-white shadow-md p-5 md:p-16 mb-9 rounded-sm text-black flex justify-center flex-col gap-16'>
                <Flex flexDir={'column'} gap={4}>
                    <Link href={'/'} className=' text-sm md:text-md flex gap-2 items-center mb-4 font-bold'>
                        <ArrowBackIcon />
                        Ver productos
                    </Link>
                    <h2 className='text-xl md:text-2xl text-center font-bold leading-tight text-blue-500 uppercase'>
                        Ingresa tus datos
                    </h2>
                    <Text textAlign={'center'}>
                        ¿Te interesa recibir más información? Completa este sencillo formulario y uno de nuestros asesores comerciales se pondrá en contacto contigo muy pronto.
                    </Text>
                </Flex>

                <SignProductForm />
            </div>
        </div>
    )
}
