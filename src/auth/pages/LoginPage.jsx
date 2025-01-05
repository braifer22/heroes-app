import { useNavigate } from 'react-router';

export function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/marvel', { replace: true });
  }

  return (
    <>
      <section className="*:p-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <hr className="border-neutral-300" />
        <button
          onClick={handleLogin}
          className={'bg-sky-500 font-semibold rounded-lg mx-3 text-white'}
        >
          Login
        </button>
      </section>
    </>
  );
}
