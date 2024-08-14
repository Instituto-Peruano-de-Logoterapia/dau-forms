import { Logo, Socials, Navigation } from '@app/components';
import { MobileMenu } from './MobileMenu';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@app/components';

export function Header() {
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
        <header className='bg-white rounded-lg shadow-md p-5 md:py-5 md:px-10 top-5 flex gap-5 max-w-7xl w-11/12 right-0 left-0 m-auto justify-between md:justify-center absolute' >
            <Logo />
            <Navigation />
            <Socials socialLinks={socialLinks} />
            <MobileMenu />
        </header>
    )
}
