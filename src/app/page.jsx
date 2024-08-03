import { Grid, Hero, Newsletter } from '@app/components';
import React from 'react';


export default function Home() {
  return (
    <React.Fragment>
      <main className='min-h-[1000px] flex items-center justify-center'>
        <div className='flex flex-col gap-4 max-w-7xl py-[150px]'>
          <Hero />
          <Grid />
        </div>
      </main>
      <Newsletter />
    </React.Fragment>
  );
}