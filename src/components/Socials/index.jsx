import React from 'react'
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@app/components';

export function Socials() {

    const socialLinks = [
        {
            link: 'https://www.tiktok.com/@dauescueladevida',
            Icon: TikTokIcon,
        },
        {
            link: 'https://www.facebook.com/dauperu',
            Icon: FacebookIcon,
        },
        {
            link: 'https://www.instagram.com/dauescueladevida/',
            Icon: InstagramIcon,
        }
    ]

    return (
        <div id='socials' className='hidden md:flex gap-2 items-center'>
            {
                socialLinks.map(socialLink => (
                    <Link key={socialLink.link} href={socialLink.link} target='_blank'>
                        <socialLink.Icon />
                    </Link>
                ))
            }
        </div>
    )
}
