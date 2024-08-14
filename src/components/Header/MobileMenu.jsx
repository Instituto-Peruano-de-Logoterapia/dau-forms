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

import { FacebookIcon, TikTokIcon } from '@app/components';
import { InstagramIcon } from '@app/components/Icons/InstagramIcon';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

export function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure();

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

                    </ModalBody>
                    <ModalFooter justifyContent={'center'}>
                        <div className='flex gap-2'>
                            <TikTokIcon />
                            
                            <InstagramIcon />
                            <FacebookIcon />
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>

    )
}
