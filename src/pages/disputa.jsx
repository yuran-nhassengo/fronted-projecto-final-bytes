import { Footer } from '../components/navBar';
import DisputaCredor from '../components/disputa/disputaCredor';
import DisputaDevedor from '../components/disputa/disputaDevedor';

export const Disputa = () => {
  return (
    <>
      <main>
        <h1>Disputa</h1>
        <Disputa/>
        <DisputaCredor />
        <DisputaDevedor />
      </main>
      <Footer />
    </>
  );
};