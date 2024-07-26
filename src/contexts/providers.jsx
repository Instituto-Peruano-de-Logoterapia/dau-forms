'use client'

import React from "react"
import { ProductsProvider } from "./Porducts"


export function Providers({ children }) {

    return (
        <React.Fragment>
            <ProductsProvider>
                {children}
            </ProductsProvider>
        </React.Fragment>
    )
}