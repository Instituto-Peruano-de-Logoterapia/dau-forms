'use client'
import React from 'react';
import { roboto } from '@app/fonts';
import { NewsletterForm } from '@app/components/Newsletter/Form';
import { NewsletterCongrats } from '@app/components/Newsletter/Congrats';

export function Newsletter() {

    const [congrats, setCongrats] = React.useState(false);

    const onCongrats = () => {
        setCongrats(true);
    }

    const NewsletterContent = () => {
        if (congrats) return <NewsletterCongrats />
        return <NewsletterForm onCongrats={onCongrats} />
    }

    return (
        <section className='bg-dau-light-blue py-32 text-white'>
            <h2 className={`${roboto.className} text-center text-2xl md:text-4xl font-normal px-2`}>
                <span className='font-bold'>
                    {congrats ? 'MUCHAS GRACIAS' : '¿QUIERES RECIBIR MÁS INFORMACIÓN?'}</span> <br /> {congrats ? 'por suscribirte' : 'suscíbete'} a nuestro newsletter.
            </h2>
            <div className='mt-10'>
                <NewsletterContent />
            </div>
        </section>
    )
}
