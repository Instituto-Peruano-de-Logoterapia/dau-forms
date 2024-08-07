import React from 'react'

export function Footer() {
    return (
        <footer className='p-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center'>
            ©{new Date().getFullYear()}, Instituto Peruano de Logoterapia Viktor Frankl. Todos los derechos reservados.
        </footer>
    )
}
