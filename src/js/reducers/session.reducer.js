import { LOGIN, LOGOFF } from '../actions/session.actions';

const initialSessionState = {
  authorized: false,
  email: null,
};

export function SessionReducer(state = initialSessionState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        authorized: true,
        email: action.email,
      };
    }
    case LOGOFF: {
      return {
        ...initialSessionState,
      };
    }
    default: {
      return state;
    }
  }
}
