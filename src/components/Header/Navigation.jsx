import Link from 'next/link';
import React from 'react'


const navigation = [
    {
        text: 'Inicio',
        href: '/'
    },
    {
        text: 'Newsletter',
        href: '#newsletter'
    },
    {
        text: 'Dau Holding',
        href: 'https://dauperu.com/dau-peru/',
        target: '_blank'
    }
];

export function Navigation() {
    return (
        <nav className='flex items-center gap-5 ms-5'>
            {
                navigation.map(anchor => (
                    <Link className='hover:text-blue-400' href={anchor.href} key={anchor.href} target={!anchor.target ? '_self' : anchor.target}>
                        {anchor.text}
                    </Link>
                ))
            }
        </nav>
    )
}
