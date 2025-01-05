import { heroes } from '../data/heroes';

export function getHeroById(id) {
  const hero = heroes.find((hero) => hero.id === id);

  return hero;
}
