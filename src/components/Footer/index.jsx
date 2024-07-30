import React from 'react'

export function Footer() {
    return (
        <div className='p-5 bg-dau-deep-blue text-white text-center'>
            ©{new Date().getFullYear()}, Instituto Peruano de Logoterapia Viktor Frankl. Todos los derechos reservados.
        </div>
    )
}
