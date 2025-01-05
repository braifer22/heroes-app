import { heroes } from '../data/heroes';

export function getHeroByName(name) {
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
  );
}
