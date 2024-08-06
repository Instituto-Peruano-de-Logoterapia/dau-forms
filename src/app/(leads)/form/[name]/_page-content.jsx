'use client'

import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Banner, Form } from '@app/components';
import { useProducts } from '@app/contexts/hooks';

export function PageContent() {

    const { currentProduct } = useProducts();

    return (
        <React.Fragment>
            <Banner />
            <div className='bg-white shadow-md p-5 mb-9 rounded-sm text-black'>
                <h1 className='text-center text-2xl font-bold text-blue-900'>
                    ¡Rellena el formulario y estaremos en contacto contigo!
                </h1>
                <Form>
                    <Flex>
                    </Flex>
                </Form>
            </div>
        </React.Fragment>
    )
}
