"use client"

import { useProducts } from '@app/contexts/hooks';
import { roboto } from '@app/fonts';
import { useEffect, useState } from 'react';

export function Hero() {

    const [hero, setHero] = useState({
        title: "¡Observa nuestros  nuevos Productos!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae neque, maiores nisi magnam molestias nostrum voluptates pariatur asperiores magni? At esse consequuntur tempora fugiat porro voluptates corporis sapiente ex!"
    });

    const { currentCategory } = useProducts();

    useEffect(() => {
        if (!currentCategory) {
            setHero({
                title: "¡Observa nuestros  nuevos Productos!",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae neque, maiores nisi magnam molestias nostrum voluptates pariatur asperiores magni? At esse consequuntur tempora fugiat porro voluptates corporis sapiente ex!"
            })
            return;
        }

        const { name: title, description } = currentCategory;
        setHero({ title, description });

    }, [currentCategory])

    return (
        <div className="text-center flex flex-col gap-5  mx-auto " id='hero-banner'>
            <h1 className={`${roboto.className} uppercase font-bold text-center antialiased text-3xl md:text-5xl leading-tight mt-5`}>
                {hero.title}
            </h1>
            <p className='p-3'>
                {hero.description}
            </p>
        </div>
    )
}
