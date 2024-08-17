import React from 'react';
import { Grid, Hero, Newsletter } from '@app/components';


export default function Home() {
  return (
    <React.Fragment>
      <main className='min-h-[100dvh] flex items-center justify-center bg-[url("/bg-hero-mobile.webp")] md:bg-[url("/bg-hero.webp")] bg-center bg-cover bg-no-repeat' >
        <div className='flex flex-col lg:flex-row gap-10 max-w-7xl py-[150px]'>
          <Hero />
          <Grid />
        </div>
      </main>
      <Newsletter />
    </React.Fragment>
  );
}