import React from 'react'
import Link from 'next/link';




export function Socials({ socialLinks }) {

    return (
        <div id='socials' className='hidden md:flex gap-2 items-center'>
            {
                socialLinks && socialLinks.map(socialLink => (
                    <Link key={socialLink.link} href={socialLink.link} target='_blank'>
                        <socialLink.Icon />
                    </Link>
                ))
            }
        </div>
    )
}
