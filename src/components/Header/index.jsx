import React from 'react'

import { TikTokIcon } from '@app/components';

export function Header() {
    return (
        <header className='bg-white shadow-md p-5 md:py-5 md:px-10 top-5 flex gap-5 max-w-7xl w-11/12 right-0 left-0 m-auto justify-center absolute' >
            <div id='logo'>
                <img src="/dau-logo.jpg" width={75} alt='logo-dau' title='logo-dau' />
            </div>
            <div id='phrase' className='flex flex-grow'>
            </div>
            <div id='socials' className=''>
                <TikTokIcon />
            </div>
        </header>
    )
}
