import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

export function LoginPage() {
  document.title = 'Iniciar Sesión | Heroes App';
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');

  const { handleLogin } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (userInput.trim().length < 1) return;

    const lastPath = localStorage.getItem('lastPath') || '/';

    handleLogin(userInput);
    navigate(lastPath, { replace: true });
  }

  return (
    <>
      <section className="flex min-h-screen justify-center items-center bg-neutral-900">
        <form
          className="flex flex-col bg-white px-8 py-10 md:px-10 rounded w-full max-w-80 md:max-w-96"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl text-center  font-black mb-8 md:mb-12">
            Heroes App
          </h1>
          <label className="m-1" htmlFor="username">
            Nombre de usuario:
          </label>
          <input
            className="border mb-4 p-2 rounded placeholder:text-neutral-400/80"
            required
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            id="username"
            type="text"
            placeholder="Ingrese su usuario:"
          />

          <label className="m-1" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="border mb-4 p-2 rounded placeholder:text-neutral-400/80"
            id="password"
            required
            type="password"
            placeholder="Ingrese su contraseña:"
          />

          <button className="bg-black rounded p-2 text-white font-semibold">
            Iniciar sesión
          </button>
        </form>
      </section>
    </>
  );
}
