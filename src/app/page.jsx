import { Grid, Hero, Newsletter } from '@app/components';


export default function Home() {
  return (
    <main className='min-h-[900px] flex items-center justify-center'>
      <div className='flex flex-col gap-4 max-w-7xl mt-[50%] md:mt-0'>
        <Hero />
        <Grid />
        <Newsletter />
      </div>
    </main>
  );
}