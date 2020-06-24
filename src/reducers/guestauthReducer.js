const INTIAL_STATE = {
  isGuestSignedIn: null,
  userId:null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "GUEST_SIGN_IN":
      return { ...state, isGuestSignedIn: true, userId: null };
    case "GUEST_SIGN_OUT":
      return { ...state, isGuestSignedIn: false, userId: null };
    default:
      return state;
  }
};
