import React from 'react'

export function Footer() {
    return (
        <footer className='p-5 text-white bg-blue-800 text-center'>
            ©{new Date().getFullYear()}, Instituto Peruano de Logoterapia Viktor Frankl. Todos los derechos reservados.
        </footer>
    )
}
