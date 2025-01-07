import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import './LoginStyles.css';

export function LoginPage() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');

  const { handleLogin } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();

    if (userInput.trim().length < 1) return;

    handleLogin(userInput);
    navigate('/marvel');
  }

  return (
    <>
      <section className="grid min-h-screen place-content-center bg-neutral-900">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1 className="text-4xl text-center font-black">Heroes App</h1>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            required
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            id="username"
            type="text"
            placeholder="Ingrese su usuario:"
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
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
