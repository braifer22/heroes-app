import { Navigate, Route, Routes } from 'react-router';
import { Navbar } from '../../ui/components/Navbar';
import { DcPage } from '../pages/DcPage';
import { MarvelPage } from '../pages/MarvelPage';
import { Search } from '../pages/Search';
import { HeroPage } from '../pages/HeroPage';

export function HeroesRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/*" element={<Navigate to={'/marvel'} />} />

        <Route path="/dc" element={<DcPage />} />
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/search" element={<Search />} />

        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </>
  );
}
