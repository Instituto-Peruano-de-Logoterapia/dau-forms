'use client'

import { roboto } from '@app/fonts';
import { useState } from 'react';
import { Form } from '../Form';

import { Button, Flex, FormControl, Input } from '@chakra-ui/react';

export function Newsletter() {

    const [formState, setStateForm] = useState({
        email: {
            value: '',
            isInvalid: false
        },
        phone: {
            value: '',
            isInvalid: false
        }
    });


    const onInputChange = (event) => {
        setStateForm(prev => ({
            ...prev,
            [event.target.name]: {
                value: event.target.value,
                isInvalid: false
            }
        }));
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const { email, phone } = formState;

        if (!emailRegex.test(email) || email.length === 0) {
            setStateForm(prev => ({ ...prev, email: { ...prev.email, isInvalid: true } }))
            return;
        }

        if (phone.length === 0) {
            setHasErrors(prev => ({ ...prev, phone: { ...prev.phone, isInvalid: true } }));
            return;
        }

        console.log({ formState });

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
                                isInvalid={formState.phone.isInvalid}
                                color={'black'}
                                bg={'white'}
                                name='phone'
                                borderRadius={0}
                                placeholder='Ingresa tu número de teléfono'
                                onChange={onInputChange}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                isInvalid={formState.email.isInvalid}
                                color={'black'}
                                bg={'white'}
                                borderRadius={0}
                                type='email'
                                name='email'
                                placeholder='Ingresa tu correo aquí'
                                onChange={onInputChange}
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
