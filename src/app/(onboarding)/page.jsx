import React from 'react';
import { Grid, Hero, Newsletter } from '@app/components';


export default function Home() {
  return (
    <React.Fragment>
      <main className='min-h-[100dvh] flex items-center justify-center' >
        <div className='flex flex-col lg:flex-row gap-10 max-w-7xl py-[150px]'>
          <Hero />
          <Grid />
        </div>
      </main>
      <Newsletter />
    </React.Fragment>
  );
}