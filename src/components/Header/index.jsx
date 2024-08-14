import { Logo, Socials } from '@app/components';
import { MobileMenu } from './MobileMenu';
import { Navigation } from './Navigation';

export function Header() {

    return (
        <header className='bg-white rounded-lg shadow-md p-5 md:py-5 md:px-10 top-5 flex gap-5 max-w-7xl w-11/12 right-0 left-0 m-auto justify-between md:justify-center absolute' >
            <Logo />
            <Navigation />
            <Socials />

            <MobileMenu />
        </header>
    )
}
