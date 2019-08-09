import { combineReducers } from 'redux';
import { SessionReducer as session } from './session.reducer';

export default combineReducers({
  session,
});
