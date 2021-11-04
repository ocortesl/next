import React from 'react'
import type { NextPage } from 'next';
import Link from 'next/link';


const index = () => {
    return (
        <div className='bg-red-500'>
            <p>Pagina index</p>
            <Link href="/adios">
            <a>ir a adios</a>
            </Link>
        </div>
    );
};

export default index
