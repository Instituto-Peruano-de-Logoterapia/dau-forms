import React from 'react'

export function Header() {
    return (
        <header className='bg-black py-5 px-10 flex gap-5 max-w-6xl justify-center absolute'>
            <div id='logo' className='bg-blue-600'>
                <div className='w-28'>
                    Logo
                </div>
            </div>
            <div id='phrase' className='bg-red-600 flex flex-grow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus!</div>
            <div id='socials' className='bg-purple-500 p-5 flex gap-5'>
                <div className='w-10 h-10 bg-yellow-400'></div>
                <div className='w-10 h-10 bg-yellow-400'></div>
                <div className='w-10 h-10 bg-yellow-400'></div>
            </div>

        </header>
    )
}
