import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export function HeroList({ publisher }) {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <section className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {heroes.map((hero) => (
        <HeroCard {...hero} key={hero.id} />
      ))}
    </section>
  );
}
