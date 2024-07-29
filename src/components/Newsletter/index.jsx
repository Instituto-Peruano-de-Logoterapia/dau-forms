'use client'

import React, { useRef, useState } from 'react'
import { roboto } from '@app/fonts';
import { Form } from '../Form';

import { FormControl, Input, FormLabel, Flex, Button } from '@chakra-ui/react'

export function Newsletter() {

    const onSubmit = (event) => {
        event.preventDefault();

        const email = inputEmailRef.current.value;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.length || !emailRegex.test(email)) {
            return;
        }

        const phone = inputPhoneRef.current.value;
    }


    return (
        <section className='bg-dau-light-blue py-32 text-white'>
            <h2 className={`${roboto.className} text-center text-2xl md:text-4xl font-normal px-2`}>
                <span className='font-bold'>¿QUIERES RECIBIR MÁS INFORMACIÓN?</span> <br /> suscríbete a nuestro newsletter.
            </h2>

            <div className='mt-20'>
                <Form onSubmit={onSubmit}>
                    <Flex gap={5} alignItems={'flex-end'} justifyContent={'center'} className='w-11/12 m-auto flex-col md:flex-row'>
                        <FormControl isRequired>
                            <Input
                                color={'black'}
                                ref={inputPhoneRef}
                                bg={'white'}
                                borderRadius={0}
                                placeholder='Ingresa tu número de teléfono'
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                color={'black'}
                                ref={inputEmailRef}
                                bg={'white'}
                                borderRadius={0}
                                type='email'
                                placeholder='Ingresa tu correo aquí'
                            />
                        </FormControl>
                        <Button
                            className='w-full md:w-auto'
                            type='submit'
                            bg={'white'}
                            py={5}
                            px={20}
                            borderRadius={0}>
                            Enviar
                        </Button>
                    </Flex>
                </Form>
            </div>
        </section>
    )
}
