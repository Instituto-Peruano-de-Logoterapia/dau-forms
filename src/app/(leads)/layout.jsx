import { Footer } from '@app/components'
import React from 'react'


export default function FormLayout({ children }) {
    return (
        <main>
            {children}
            <Footer />
        </main>
    )
}
