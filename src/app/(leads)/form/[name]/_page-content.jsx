'use client'

import { Banner, SignProductForm } from '@app/components';
import { products } from '@app/data';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useProducts } from '@app/contexts/hooks';


// TODO: INTEGRAR BACKEND API CALLS E INTEGRAR MODAL DE RESPUESTA CUANDO HAYA MANDADO EL FORMULARIO
// TODO: AGREGAR GA

export function PageContent({ productName }) {

    const { onSetCurrentProduct } = useProducts()

    useEffect(() => {
        const productSelected = products.find(product => product.constantName === productName)
        onSetCurrentProduct(productSelected);
    }, []);


    return (
        <div className='flex flex-col gap-4 px-4'>
            <Banner />
            <div className='bg-white shadow-md p-5 md:p-16 mb-9 rounded-sm text-black flex justify-center flex-col gap-16'>
                <Flex flexDir={'column'} gap={4}>
                    <Link href={'/'} className=' text-sm md:text-md flex gap-2 items-center mb-4 font-bold'>
                        <ArrowBackIcon />
                        Ver productos
                    </Link>
                    <h1 className='text-2xl md:text-4xl text-center font-bold leading-tight text-blue-500 uppercase'>
                        Ingresa tus datos
                    </h1>
                    <Text textAlign={'center'}>
                        Estas interesado en coloca tus datos en este <strong>formulario simple</strong>, nuestra área de ventas se estará poniendo en contacto contigo <strong>pronto.</strong>
                    </Text>
                </Flex>

                <SignProductForm />
            </div>
        </div>
    )
}
