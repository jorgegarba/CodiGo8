import React from 'react'
import NavClient from '../Components/Client/NavClient';

export default function ClientLayout({children}) {
    return (
        <div>
            <NavClient/>
            {children}
        </div>
    )
}
