import { useEffect, useReducer } from 'react';
import types from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authreducer';

const initialUser = JSON.parse(localStorage.getItem('userAuth')) || {
  logged: false,
  username: null,
};

export function AuthProvider({ children }) {
  const [userAuth, dispatch] = useReducer(authReducer, initialUser);

  function handleLogin(username) {
    const user = {
      id: Date.now(),
      name: username,
    };

    localStorage.setItem('userAuth', JSON.stringify(user));

    dispatch({
      type: types.login,
      payload: user,
    });
  }

  function handleLogout() {
    localStorage.removeItem('userAuth');

    dispatch({
      type: types.logout,
    });
  }

  return (
    <AuthContext.Provider value={{ userAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
