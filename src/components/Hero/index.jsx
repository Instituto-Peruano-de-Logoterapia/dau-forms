"use client"

import { useProducts } from '@app/contexts/hooks';
import { categories } from '@app/data';
import { roboto } from '@app/fonts';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function Hero() {

    const [hero, setHero] = useState({
        title: "¡Te brindamos la logoterapia a tu vida!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae neque, maiores nisi magnam molestias nostrum voluptates pariatur asperiores magni? At esse consequuntur tempora fugiat porro voluptates corporis sapiente ex!"
    });

    const { currentCategory, onSetCurrentCategory, onSetProducts, onSetGridItems } = useProducts();

    const reset = () => {
        onSetCurrentCategory(null);
        onSetProducts(null);
        onSetGridItems(categories);
    }

    useEffect(() => {
        if (!currentCategory) {
            setHero({
                title: "¡Te brindamos la logoterapia a tu vida!",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae neque, maiores nisi magnam molestias nostrum voluptates pariatur asperiores magni? At esse consequuntur tempora fugiat porro voluptates corporis sapiente ex!"
            })
            return;
        }

        const { name: title, description } = currentCategory;
        setHero({ title, description });

    }, [currentCategory])

    return (
        <div className="text-center lg:text-left flex flex-col justify-center gap-5 p-6 md:p-4 mx-auto lg:w-1/2 bg-white rounded-md shadow-md max-w-[90%] md:bg-transparent md:max-w-none md:shadow-none" id='hero-banner'>
            {
                !!currentCategory && (
                    <p className='text-center lg:text-left p-0  rounded-md tracking-wider'>
                        Haz Seleccionado:
                    </p>
                )
            }
            <h1 className={`${roboto.className} m-0 text-center lg:text-left uppercase font-bold antialiased text-3xl md:text-4xl leading-tight bg-gradient-to-r from-cyan-400 to-blue-600 inline-block 
            text-transparent bg-clip-text`}>
                {hero.title}
            </h1>

            <p className=''>
                {hero.description}
            </p>

            {
                currentCategory && (
                    <div className='flex justify-center lg:justify-end mt-10'>
                        <Button bg={'white'} borderRadius={'unset'} border={'1px'} borderColor={'white'} onClick={reset}>
                            <ArrowBackIcon />
                            <span className='ml-2'>Explorar categorías</span>
                        </Button>
                    </div>
                )
            }
        </div>
    )
}
