'use client'

import { DauService } from '@app/services';
import { Alert, AlertIcon, Button, Flex, FormControl, Input } from '@chakra-ui/react';
import React from 'react';

export function NewsletterForm({ onCongrats }) {

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
        isLoading: false,
        isValid: true,
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

    const onSubmit = async (event) => {
        event.preventDefault();

        // if (!userAlreadyPayMe) {
        //     console.log('lelelel')
        //     return
        // }

        setStateForm(prev => ({ ...prev, isLoading: true, isValid: true }));
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

        const payload = {
            phone: formState.fields.phone.value,
            email: formState.fields.email.value
        }

        // api call
        const response = await DauService.callAPI(payload, 'https://form.dauperu.com/formback/api/newsletter.php')

        if (!response.ok) {
            setStateForm(prev => ({ ...prev, isLoading: false, isValid: false }));
            return;
        }

        setStateForm(prev => ({ ...prev, isLoading: false, isValid: true }));
        onCongrats();
    }

    return (
        <React.Fragment>

            <form onSubmit={onSubmit} className='max-w-7xl m-auto'>

                <Flex className='w-11/12 m-auto flex-col md:flex-row justify-center items-end gap-5'>

                    <FormControl>
                        <Input
                            disabled={formState.isLoading}
                            isInvalid={formState.fields.phone.isInvalid}
                            color={'black'}
                            bg={'white'}
                            borderColor={'#ccc'}
                            name='phone'
                            borderRadius={'0.375rem'}
                            placeholder='Ej. +51982393722'
                            onChange={onInputChange}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            disabled={formState.isLoading}
                            isInvalid={formState.fields.email.isInvalid}
                            color={'black'}
                            bg={'white'}
                            borderRadius={'0.375rem'}
                            borderColor={'#ccc'}
                            type='email'
                            name='email'
                            placeholder='Ej. johndoe@gmail.com'
                            onChange={onInputChange}
                        />
                    </FormControl>
                    <Button
                        bgColor={'#35c9f7'}
                        textColor={'white'}
                        _hover={{ bgColor: '#3ac0e9' }}
                        isLoading={formState.isLoading}
                        className='w-full md:w-auto'
                        type='submit'
                        borderRadius={'0.375rem'}
                        py={5}
                        px={20}
                    >
                        Enviar
                    </Button>
                </Flex>
            </form>

            {
                !formState.isValid && (
                    <Alert status='error' textAlign={'center'} maxW={{ base: '90%', md: '45%' }} margin={'auto'} mt={10}>
                        <AlertIcon />
                        Hubo un error al enviar el formulario, pruebe nuevamente
                    </Alert>
                )
            }
        </React.Fragment>
    )
}
