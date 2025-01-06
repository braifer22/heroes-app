import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authreducer';
import types from '../types/types';

export function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(authReducer, {});

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

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
