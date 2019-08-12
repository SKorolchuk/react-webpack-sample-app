import { LOGIN, LOGOFF } from '../actions/session.actions';

const SESSION_KEY = 'session_state';

const initialSessionState = () =>
  JSON.parse(sessionStorage.getItem(SESSION_KEY)) || {
    authorized: false,
    email: null,
  };

const freeze = object => {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(object));
  return object;
};

export function SessionReducer(
  state = initialSessionState(),
  action,
) {
  switch (action.type) {
    case LOGIN: {
      return freeze({
        ...state,
        authorized: true,
        email: action.email,
      });
    }
    case LOGOFF: {
      return freeze({
        ...initialSessionState(),
        authorized: false,
        email: null,
      });
    }
    default: {
      return state;
    }
  }
}
