import React from 'react'
import { roboto } from '@app/fonts';

export function Hero() {
    return (
        <div className="text-center flex flex-col gap-5  mx-auto">
            <h1 className={`${roboto.className} uppercase font-bold text-center antialiased text-3xl md:text-5xl leading-tight`}>
                ¡Observa nuestros  nuevos Productos!
            </h1>
            <p className='p-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae neque, maiores nisi magnam molestias nostrum voluptates pariatur asperiores magni? At esse consequuntur tempora fugiat porro voluptates corporis sapiente ex!
            </p>
        </div>
    )
}
