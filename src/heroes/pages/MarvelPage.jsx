import { HeroList } from '../components/HeroList';

export function MarvelPage() {
  return (
    <>
      <main className="p-4">
        <h1 className="text-4xl font-black my-4">Marvel Comics</h1>
        <HeroList publisher={'Marvel Comics'} />
      </main>
    </>
  );
}
