'use client'

import { DauService } from '@app/services';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Select, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { useCountries, useProducts } from '../../contexts/hooks';


export function SignProductForm() {

    const [formData, setFormData] = useState({
        productId: '',
        productName: '',
        form: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            phoneCode: '',
            countryName: '',
            countryCode: '',
            message: '',
        },
    });

    const [formState, setFormState] = useState({
        isLoading: false,
        isValid: true,
        isCompleted: false,
    });

    const [country, setCountry] = useState(null);
    const { countries } = useCountries();
    const { currentProduct } = useProducts();

    const onChangeInput = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            form: {
                ...prevState.form,
                [event.target.name]: event.target.value
            }
        }));
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormState({ isLoading: true, isCompleted: false, isValid: true });

        const updatedFormData = {
            ...formData,
            productId: currentProduct.id,
            productName: currentProduct.name,
            form: {
                ...formData.form,
                countryName: country.name,
                phoneCode: country.callingCode
            }
        };

        const { message, ...validateFields } = updatedFormData.form;
        const formValues = Object.values(validateFields);

        if (formValues.includes("")) {
            setFormState((prevState) => ({ ...prevState, isValid: false }));
            return;
        }

        setFormData(updatedFormData);

        const payload = {
            idProduct: updatedFormData.productId,
            formData: {
                ...updatedFormData.form
            }
        }

        const response = await DauService.callAPI(payload, 'https://form.dauperu.com/formback/api/signproduct.php');

        if (!response) {
            setFormState({
                isLoading: false,
                isCompleted: false,
                isValid: false,
            });
            return;
        }

        setFormState({ isLoading: false, isCompleted: true, isValid: true });
    };


    return (
        <Flex as={'form'} onSubmit={onSubmit} flexDir='column' gap={10}>
            {
                !formState.isValid && (
                    <Alert status='error' textAlign={'center'}>
                        <AlertIcon />
                        Hubo un error al enviar el formulario, pruebe nuevamente
                    </Alert>
                )
            }

            {
                formState.isCompleted && (
                    <Alert status='success' textAlign={'center'}>
                        <AlertIcon />
                        Se ha enviado los datos correctamente, ¡Muchas Gracias!
                    </Alert>
                )
            }
            <Flex flexDir={'column'} flexGrow={1} gap={4}>
                <Flex gap={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                    <FormControl isRequired>
                        <FormLabel>Ingresa tus nombres</FormLabel>
                        <Input borderColor={'#ccc'} name='firstname' value={formData.form.firstname} onChange={onChangeInput} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Ingresa tus apellidos</FormLabel>
                        <Input borderColor={'#ccc'} name='lastname' value={formData.form.lastname} onChange={onChangeInput} />
                    </FormControl>
                </Flex>
                <FormControl isRequired>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <Input borderColor={'#ccc'} type='email' name='email' value={formData.form.email} onChange={onChangeInput} />
                </FormControl>

                <Flex gap={4} alignItems={'center'}>
                    <FormControl isRequired flexBasis={'40%'}>
                        <FormLabel>País</FormLabel>
                        <Select variant={'outline'} name='countryCode' borderColor={'#ccc'} onChange={(evt) => {
                            onChangeInput(evt);
                            setCountry(() => {
                                return countries.find(c => c.code === evt.target.value)
                            })
                        }}>
                            <option defaultChecked>Selecciona tu país</option>
                            {
                                countries.length > 0 && countries.map(country => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Número de teléfono</FormLabel>
                        <InputGroup>
                            {
                                country && (
                                    <InputLeftAddon gap={2} borderColor={'#ccc'}>
                                        <img src={country.flagImage} className='w-8 border-black border-1' alt="country-flag" />
                                        ({country.callingCode})
                                    </InputLeftAddon>
                                )
                            }
                            <Input borderColor={'#ccc'} type='tel' name='phone' onChange={onChangeInput} />
                        </InputGroup>
                    </FormControl>
                </Flex>

                <FormControl>
                    <FormLabel>Déjanos un mensaje:</FormLabel>
                    <Textarea borderColor={'#ccc'} rows={15} name='message' onChange={onChangeInput} />
                </FormControl>
            </Flex>

            <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={4}>
                <Button
                    isLoading={formState.isLoading}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    type='submit'
                    gap={1}
                    px={10}
                    w={{
                        base: '100%',
                        md: '180px'
                    }}
                    bgColor={'#2563eb '}
                    color={'white'}
                    _hover={{ bgColor: '#2563eb ' }}>
                    <ArrowForwardIcon />
                    Enviar
                </Button>

            </Flex>


        </Flex>
    )
}