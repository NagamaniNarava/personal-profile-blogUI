import {
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    // case FETCH_STREAMS:
    //   return action.payload;
    case FETCH_STREAM:
      return action.payload;
    case CREATE_STREAM:
      return  action.payload;
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return state;
    default:
      return state;
  }
};
