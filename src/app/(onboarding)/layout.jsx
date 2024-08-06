import React from 'react'
import { Header, Footer } from '@app/components'



export default function OnBoardingLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}
