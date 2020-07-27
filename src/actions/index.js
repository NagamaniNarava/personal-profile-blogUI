import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';
import Axios from 'axios';



export const signIn = userAuthenticateId => {
  return {
    type: SIGN_IN,
    payload: userAuthenticateId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const guestSignIn = () => {
  return {
    type: "GUEST_SIGN_IN"
  };
};

export const guestSignOut = () => {
  return {
    type: "GUEST_SIGN_OUT"
  };
  
};

export const profilesearch = inputvalues => async (dispatch) => {

  const response = await Axios.post('http://search-env-1.eba-kesga4uk.us-east-2.elasticbeanstalk.com/search/skillsearch', inputvalues);
  
  dispatch({ type: "PROFILE_SEARCH", payload: response.data });
};

export const createStream = formValues => async (dispatch, getState) => {
  
  const { userAuthenticateId } = getState().auth;
  const response = await streams.post('/applicants', { ...formValues, userAuthenticateId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  
  const response = await streams.get('/applicants');
  
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/applicant/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (inputId, formValues) => async dispatch => {
  const {id} = inputId;
  const response = await streams.post(`/applicant/edit`, {...formValues},id);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push(`/applicants/${inputId}`);
};

export const deleteStream = id => async dispatch => {
  await streams.post(`/applicant/delete/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};
