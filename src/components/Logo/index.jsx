import React from 'react'

export function Logo({ width = 75 }) {
    return (
        <div id='logo'>
            <img src="/dau-logo.jpg" width={width} alt='logo-dau' title='logo-dau' />
        </div>
    )
}
