import types from '../types/types';

export function authReducer(state, action) {
  switch (action.type) {
    case types.login:
      return {
        logged: true,
        username: action.payload,
      };

    case types.logout:
      return {
        logged: false,
        username: null,
      };

    default:
      return state;
  }
}
