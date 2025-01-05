import { useLocation, useNavigate } from 'react-router';
// import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroByName } from '../helpers/getHeroesByName';
import queryString from 'query-string';
import { useRef } from 'react';

export function Search() {
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);

  let hero;

  if (query.q) {
    hero = getHeroByName(query.q);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputRef.current.value.trim() === '') return;

    navigate(`?q=${inputRef.current.value.trim().toLowerCase()}`);
  }

  return (
    <>
      <main className="p-4">
        <h1 className="text-4xl font-black my-4">Search Hero</h1>

        <section className="grid grid-cols-[auto,1fr] gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
            <h2 className="font-semibold text-lg">Buscar heroes:</h2>
            <input
              ref={inputRef}
              type="text"
              className="border p-2 rounded bg-white outline-none"
              placeholder="Nombre del heroe:"
              autoComplete="off"
              name="inputHero"
            />
            <button className="bg-neutral-900 p-2 rounded text-white font-semibold">
              Buscar
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg text-center">Resultados:</h2>
            {!query.q && (
              <div className="bg-sky-200 p-3 rounded text-blue-600">
                Aqui apareceran los superheroes.
              </div>
            )}

            {query.q && hero.length === 0 && (
              <div className="text-red-600 bg-red-100 p-3 rounded">
                No se encontró el superheroe:{' '}
                <span className="font-semibold">{query.q}</span>.
              </div>
            )}

            {hero?.length > 0 &&
              hero.map((hero) => <HeroCard key={hero.id} {...hero} />)}
          </div>
        </section>
      </main>
    </>
  );
}
