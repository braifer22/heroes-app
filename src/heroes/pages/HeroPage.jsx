import { Navigate, useNavigate, useParams } from 'react-router';
import { getHeroById } from '../helpers/getHeroById';
import { useMemo } from 'react';

export function HeroPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Navigate to={'/marvel'} />;
  }

  const {
    alter_ego,
    characters,
    first_appearance,
    publisher,
    superhero,
    id: heroId,
  } = hero;

  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      <section className="relative">
        <div className="bg-black absolute top-0 w-full -z-50">
          <div className="overflow-hidden h-[32rem] relative">
            <img
              src={`/src/assets/heroes/${heroId}.jpg`}
              alt=""
              className="w-full h-full object-cover batman"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e1e1e1] via-10% via-neutral-300 to-transparent" />
          </div>
        </div>
        <header className="p-12 flex gap-12">
          <img src={`/heroes/${heroId}.jpg`} className="h-72 rounded" />
          <div className="text-white flex flex-col">
            <h1 className="font-bold text-4xl">{superhero}</h1>
            <p className="drop-shadow-xl my-4">
              {superhero} hizo su primera aparición en{' '}
              <span className="font-semibold">{first_appearance}</span> de{' '}
              {publisher}.<br />
              El nombre de pila de {superhero} es {alter_ego}
              {alter_ego == characters
                ? '.'
                : `, aunque también se vio interpretado por todos estos: ${characters}`}
            </p>
            <button
              onClick={handleClick}
              className="self-start bg-neutral-900 p-2 rounded mt-auto"
            >
              Volver atras
            </button>
          </div>
        </header>
      </section>
    </>
  );
}
