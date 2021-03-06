import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import fetchStreamReducer from './fetchStreams';
import guestauthReducer from './guestauthReducer';
import profileSearchReducer from './profileSearch';

export default combineReducers({
  auth: authReducer,
  guestauth:guestauthReducer,
  form: formReducer,
  streams: streamReducer,
  profiles:fetchStreamReducer,
  searchresults:profileSearchReducer
});
