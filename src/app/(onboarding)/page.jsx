import React from 'react';
import { Grid, Hero, Newsletter } from '@app/components';


export default function Home() {
  return (
    <React.Fragment>
      <main className='min-h-[1000px] flex items-center justify-center' style={{
        backgroundImage: 'url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='flex flex-col lg:flex-row gap-10 max-w-7xl py-[150px]'>
          <Hero />
          <Grid />
        </div>
      </main>
      <Newsletter />
    </React.Fragment>
  );
}