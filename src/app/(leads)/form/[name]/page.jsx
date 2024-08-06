import React from 'react';
import { products } from '@app/data';
import { PageContent } from './_page-content';

export async function generateStaticParams() {
    return products.map((product) => {
        const { constantName } = product;
        return {
            name: constantName,
        }
    })
}

export default function Page({ params }) {
    return (
        <div className='max-w-[1200px] m-auto'>
            <PageContent />
        </div>
    )
}
