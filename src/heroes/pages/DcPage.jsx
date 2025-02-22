import { HeroList } from '../components/HeroList';

export function DcPage() {
  document.title = 'DC Comics | Heroes App';

  return (
    <>
      <main className="p-4">
        <h1 className="text-4xl font-black my-4">DC Comics</h1>
        <HeroList publisher={'DC Comics'} />
      </main>
    </>
  );
}
