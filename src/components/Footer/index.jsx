import React from 'react'

export function Footer() {
    return (
        <footer className='p-5 text-white bg-dau-deep-blue text-center'>
            ©{new Date().getFullYear()}, Instituto Peruano de Logoterapia Viktor Frankl. Todos los derechos reservados.
        </footer>
    )
}
