'use client'

import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { Banner, Form } from '@app/components';
import { useProducts } from '@app/contexts/hooks';

export function PageContent() {

    const { currentProduct, onSetCurrentProduct } = useProducts();



    return (
        <div className='px-5'>
            <Banner idProduct={currentProduct.id} />
            <div className='bg-white shadow-md p-5 mb-9 rounded-sm text-black flex justify-center'>
                <h1 className='text-2xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text'>
                    ¡Rellena el formulario y estaremos en contacto contigo!
                </h1>
                <Form>
                    <Flex>
                    </Flex>
                </Form>
            </div>
        </div>
    )
}
