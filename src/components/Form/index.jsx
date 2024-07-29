import React from 'react'


export function Form({ children, onSubmit }) {
    return (
        <form className="max-w-7xl m-auto" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

