export const LOGIN = 'LOGIN';
export const LOGOFF = 'LOGOFF';

export function login({ email, password }) {
  return {
    type: LOGIN,
    email,
    password,
  };
}

export function logoff() {
  return {
    type: LOGOFF,
  };
}
