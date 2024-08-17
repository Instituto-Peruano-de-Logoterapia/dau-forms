'use client';

import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Box
} from '@chakra-ui/react';
import React from 'react';

import { FacebookIcon, TikTokIcon, InstagramIcon, Socials } from '@app/components';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

export function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure();

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

    const navigation = [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Grupo Dau',
            href: 'https://dauperu.com/dau-peru/',
        }
    ];

    return (
        <React.Fragment>
            <div className='flex md:hidden items-center'>
                <Button children={<HamburgerIcon />} onClick={onOpen} />
            </div>

            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader display={'flex'} justifyContent={'center'} mt={'25px'}>
                        <Logo width={150} />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt={'25px'}>
                        <div className='flex flex-col items-center text-3xl font-bold gap-2'>
                            {
                                navigation.map(anchor => (
                                    <Link className='hover:text-blue-400'
                                        href={anchor.href}
                                        key={anchor.href}
                                        target={'_blank'}>
                                        {anchor.text}
                                    </Link>
                                ))
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter justifyContent={'center'} flexDir={'column'} gap={5}>
                        <h3 className='text-2xl uppercase font-bold text-center'>Síguemos en nuestras redes sociales</h3>
                        <div className='flex gap-2'>
                            {
                                socialLinks.map(socialLink => (
                                    <Link key={socialLink.link} href={socialLink.link} target='_blank'>
                                        <socialLink.Icon width={50} height={50} />
                                    </Link>
                                ))
                            }
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>

    )
}
