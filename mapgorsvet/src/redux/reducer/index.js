import { combineReducers } from 'redux';

import auth from './auth';
import coup from './coup'

export default combineReducers({
  auth,
  coup
});