import React from 'react'
import { Logo } from '../components';

export default function Loading() {

    return (
        <div className='h-[100dvh] grid place-items-center bg-white'>
            <div className='animate-pulse'>
                <Logo width={150} />
            </div>
        </div>
    )
}
