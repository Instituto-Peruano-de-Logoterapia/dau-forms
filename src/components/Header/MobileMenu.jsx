'use client';

import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';


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
                    <ModalCloseButton />
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalBody>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim saepe alias laboriosam voluptates odio unde! Aliquam odio consectetur facere nesciunt? Similique dolorem voluptatum nihil deserunt atque cumque optio nisi dolor.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>

    )
}
