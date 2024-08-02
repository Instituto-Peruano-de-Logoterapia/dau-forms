import { Grid, Hero, Newsletter } from '@app/components';
import React from 'react';


export default function Home() {
  return (
    <React.Fragment>
      <main className='min-h-[900px] flex items-center justify-center'>
        <div className='flex flex-col gap-4 max-w-7xl py-[150px] md:py-0'>
          <Hero />
          <Grid />
        </div>
      </main>
      <Newsletter />
    </React.Fragment>
  );
}