import { useEffect, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authreducer';
import types from '../types/types';

const initialUser = {
  logged: false,
  username: null,
};

export function AuthProvider({ children }) {
  const [userAuth, dispatch] = useReducer(authReducer, initialUser);

  function handleLogin(username) {
    dispatch({
      type: types.login,
      payload: username,
    });
  }

  function handleLogout() {
    dispatch({
      type: types.logout,
    });
  }

  useEffect(() => {
    console.log(userAuth.username);
  }, [userAuth]);

  return (
    <AuthContext.Provider value={{ userAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
