'use client'

import { Banner } from '@app/components';
import { useProducts } from '@app/contexts/hooks';
import { products } from '@app/data';
import { Button, Flex, FormControl, FormLabel, Input, Text, Textarea, Select, Box } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
import Link from 'next/link';


export function PageContent({ productName }) {

    const { onSetCurrentProduct, currentProduct } = useProducts();
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});

    useEffect(() => {
        const productSelected = products.find(product => product.constantName === productName)
        onSetCurrentProduct(productSelected);
    }, []);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();

                console.log(data)

                const currentCountries = data.map((country) => ({
                    name: country.name.common,
                    flagImage: country.flags.png,
                    code: country.cca2,
                    callingCode: `${country.idd.root}${country.idd.suffixes}`
                }));

                console.log(currentCountries)
                setCountries(currentCountries);
            } catch (error) {
                console.log('error while retriving the countries')
                setCountries([]);
            }
        }

        getCountries();
    }, [])

    // TODO: VALIDAR ESTILOS DE LA BANDERITA, HACER QUE SE APLIQUEN CUANDO EXISTA UN PAIS SELECCIONADO, TAMBIEN PENSAR EN UN MEJOR NOMBRE PARA LOS STATES.
    // TODO: INTEGRAR BACKEND API CALLS E INTEGRAR MODAL DE RESPUESTA CUANDO HAYA MANDADO EL FORMULARIO
    // TODO: AGREGAR GA

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
                <Flex as={'form'} flexDir='column' gap={10}>
                    <Flex flexDir={'column'} flexGrow={1} gap={4}>
                        <Flex gap={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                            <FormControl isRequired>
                                <FormLabel>Ingresa tus nombres</FormLabel>
                                <Input borderColor={'#ccc'} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Ingresa tus apellidos</FormLabel>
                                <Input borderColor={'#ccc'} />
                            </FormControl>
                        </Flex>
                        <FormControl isRequired>
                            <FormLabel>Correo Electrónico</FormLabel>
                            <Input borderColor={'#ccc'} type='email' />
                        </FormControl>

                        <Flex gap={4} alignItems={'center'}>
                            <FormControl isRequired flexBasis={'40%'}>
                                <FormLabel>País</FormLabel>
                                <Select variant={'outline'} borderColor={'#ccc'} onChange={(evt) => setCountry(() => {
                                    return countries.find(c => c.code === evt.target.value)
                                })}>
                                    <option defaultChecked>Selecciona tu país</option>
                                    {
                                        countries.map(country => (
                                            <option key={country.code} value={country.code}>
                                                {country.name}
                                            </option>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl isRequired >
                                <FormLabel>Número de teléfono</FormLabel>
                                <Box position={'relative'}>
                                    <Input borderColor={'#ccc'} type='email' ps={'110px'} />
                                    <Flex alignItems={'center'} gap={2} position={'absolute'} top={2} left={2}>
                                        <img src={country.flagImage} className='w-8 border-black border-1' alt="country-flag" />
                                        ({country.callingCode})
                                    </Flex>
                                </Box>
                            </FormControl>
                        </Flex>

                        <FormControl>
                            <FormLabel>Déjanos un mensaje:</FormLabel>
                            <Textarea borderColor={'#ccc'} rows={15} />
                        </FormControl>
                    </Flex>

                    <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={4}>
                        <Button
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
            </div>
        </div>
    )
}
