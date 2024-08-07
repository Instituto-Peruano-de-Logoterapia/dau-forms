"use client"

import { useProducts } from '@app/contexts/hooks';
import { roboto } from '@app/fonts';
import { useEffect, useState } from 'react';

export function Hero() {

    const [hero, setHero] = useState({
        title: "¡Te brindamos la logoterapia a tu vida!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae neque, maiores nisi magnam molestias nostrum voluptates pariatur asperiores magni? At esse consequuntur tempora fugiat porro voluptates corporis sapiente ex!"
    });

    const { currentCategory } = useProducts();

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
        <div className="text-center lg:text-left flex flex-col justify-center gap-5 p-4 mx-auto lg:w-1/2" id='hero-banner'>
            <h1 className={`${roboto.className} text-center lg:text-left uppercase font-bold antialiased text-3xl md:text-4xl leading-tight mt-5 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 inline-block 
            text-transparent bg-clip-text`}>
                {hero.title}
            </h1>
            <p className=''>
                {hero.description}
            </p>
        </div>
    )
}
