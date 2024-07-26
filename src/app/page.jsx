import { Grid, Hero } from '@app/components';


export default function Home() {
  return (
    <main className="min-h-screen bg-red-400">
      <Hero />
      {/* GRID */}
      <Grid />
    </main>
  );
}