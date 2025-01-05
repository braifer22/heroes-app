import { Link } from 'react-router';

export function HeroCard({
  superhero,
  id,
  alter_ego,
  characters,
  publisher,
  first_appearance,
}) {
  const badgeColors =
    publisher === 'Marvel Comics'
      ? 'bg-red-100 text-red-600'
      : 'bg-blue-100 text-blue-700';

  return (
    <Link to={`/hero/${id}`}>
      <article className="rounded drop-shadow-lg flex group bg-white overflow-hidden duration-200 ring-black hover:ring-1">
        <img
          src={`/src/assets/heroes/${id}.jpg`}
          className="sombra h-64 block aspect-[500/800] grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300"
          alt=""
        />
        <div className="p-4 flex flex-col gap-2">
          <div
            className={`text-xs font-semibold py-1 px-2 rounded-full ${badgeColors} self-start`}
          >
            {publisher}
          </div>
          <h3 className="text-2xl font-bold">{superhero}</h3>
          <p className="text-sm text-neutral-700">
            {superhero} hizo su primera aparición en el cómic:
            <span className="font-semibold"> {first_appearance}</span>
          </p>
          <div className="text-right duration-200 mt-auto text-sm opacity-0 group-hover:opacity-100">
            Haz <span className="font-semibold">click</span> para ver mas.
          </div>
        </div>
      </article>
    </Link>
  );
}
