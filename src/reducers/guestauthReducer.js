const INTIAL_STATE = {
  isGuestSignedIn: null,
  userAuthenticateId:null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "GUEST_SIGN_IN":
      return { ...state, isGuestSignedIn: true, userAuthenticateId: null };
    case "GUEST_SIGN_OUT":
      return { ...state, isGuestSignedIn: false, userAuthenticateId: null };
    default:
      return state;
  }
};
