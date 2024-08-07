'use client'

import React from 'react'
import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { Form } from '../Form';
import { useProducts } from '@app/contexts/hooks';

export function NewsletterForm({ onCongrats }) {

    const { userAlreadyPayMe } = useProducts();

    const [formState, setStateForm] = React.useState({
        fields: {
            email: {
                value: '',
                isInvalid: false
            },
            phone: {
                value: '',
                isInvalid: false
            }
        },
        isLoading: false
    });

    const onInputChange = (event) => {
        setStateForm(prev => ({
            ...prev,
            fields: {
                ...prev.fields,
                [event.target.name]: {
                    value: event.target.value,
                    isInvalid: false
                }
            },
        }));
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!userAlreadyPayMe) {
            console.log('lelelel')
            return
        }

        setStateForm(prev => ({ ...prev, isLoading: true }));
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const { fields } = formState;
        const { email, phone } = fields;

        if (!emailRegex.test(email.value) || email.value.length === 0) {
            setStateForm(prev => ({
                fields: {
                    ...prev,
                    email: {
                        ...prev.fields.email,
                        isInvalid: true
                    }
                },
                isLoading: false
            }));

            return;
        }

        if (phone.length === 0) {
            setStateForm(prev => ({
                fields: {
                    ...prev,
                    phone: {
                        ...prev.fields.phone,
                        isInvalid: true
                    }
                },
                isLoading: false
            }));

            return;
        }

        setTimeout(() => {
            setStateForm(prev => ({ ...prev, isLoading: false }));
            onCongrats();
        }, 5000);

    }

    return (
        <Form onSubmit={onSubmit}>
            <Flex className='w-11/12 m-auto flex-col md:flex-row justify-center items-end gap-5'>
                <FormControl>
                    <Input
                        disabled={formState.isLoading}
                        isInvalid={formState.fields.phone.isInvalid}
                        color={'black'}
                        bg={'white'}
                        name='phone'
                        borderRadius={0}
                        placeholder='Ingresa tu número de teléfono'
                        onChange={onInputChange}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        disabled={formState.isLoading}
                        isInvalid={formState.fields.email.isInvalid}
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
                    isLoading={formState.isLoading}
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
    )
}
