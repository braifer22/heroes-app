import { Route, Routes } from 'react-router';
import { LoginPage } from '../auth/pages/LoginPage';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
