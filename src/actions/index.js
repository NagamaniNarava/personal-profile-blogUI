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



export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
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


export const createStream = formValues => async (dispatch, getState) => {
  
  const { userId } = getState().auth;
  const response = await streams.post('/applicants', { ...formValues, userId });
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

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.post(`/applicant/delete/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};
