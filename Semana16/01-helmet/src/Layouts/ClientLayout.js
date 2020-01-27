import React from 'react'
import NavClient from '../Components/Client/NavClient';
import { Helmet } from 'react-helmet';

export default function ClientLayout({children, title, subtitle}) {
    console.log(title,subtitle)
    return (
        <div>
            <Helmet>
                {title && <title> {title} </title>}
                {subtitle && <meta name="descripcion" content={subtitle} />}
            </Helmet>
            <NavClient/>
            {children}
        </div>
    )
}
