'use client'

import React from "react"
import { ProductsProvider } from "./Porducts"
import { ChakraProvider } from "@chakra-ui/react"

export function ProvidersContainer({ children }) {

    return (
        <React.Fragment>
            <ChakraProvider>
                <ProductsProvider>
                    {children}
                </ProductsProvider>
            </ChakraProvider>
        </React.Fragment>
    )
}