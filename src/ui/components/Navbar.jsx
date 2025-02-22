import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../auth/context/AuthContext';

export function Navbar() {
  const navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);

  function handleClick() {
    handleLogout();
    navigate('/login', { replace: true });
  }

  return (
    <header className="flex sticky top-0 z-50 items-center px-4 py-2 bg-neutral-900 text-white justify-between">
      <h1 className="font-bold text-xl flex-1">{user?.name || 'HEROES/APP'}</h1>
      <nav className="flex *:px-3  font-semibold *:duration-200 divide-x divide-neutral-700">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-white' : 'text-neutral-500 hover:text-white'
          }
          to={'/marvel'}
        >
          Marvel
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-white' : 'text-neutral-500 hover:text-white'
          }
          to={'/dc'}
        >
          DC
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-white' : 'text-neutral-500 hover:text-white'
          }
          to={'/search'}
        >
          Search
        </NavLink>
      </nav>

      <div className="flex-1 justify-items-end">
        <button
          onClick={handleClick}
          className={
            'size-10 bg-neutral-800 rounded-full grid place-content-center'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="2 0 24 24"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M15 12h-12l3 -3" />
            <path d="M6 15l-3 -3" />
          </svg>
        </button>
      </div>
    </header>
  );
}
