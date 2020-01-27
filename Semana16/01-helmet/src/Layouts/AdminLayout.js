import React from 'react';
import NavAdmin from '../Components/Admin/NavAdmin';

export default function AdminLayout({children}) {
    return (
        <div>
            <NavAdmin/>
            {children}
        </div>
    )
}
