import React from 'react'

export function Header() {
    return (
        <header className='bg-black p-5 md:py-5 md:px-10 top-5 flex gap-5 max-w-7xl w-11/12 right-0 left-0 m-auto justify-center absolute' >
            <div id='logo' className='bg-blue-600'>
                <div>
                    Logo
                </div>
            </div>
            <div id='phrase' className='bg-red-600 flex flex-grow'>
                <p className='hidden md:block'>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, enim?"
                </p>
            </div>
            <div id='socials' className='bg-purple-500'>
                <div>
                    Isotipo
                </div>
            </div>
        </header>
    )
}
