export default (state = null, action) => {
    switch (action.type) {
      case "PROFILE_SEARCH":
        return action.payload;
      default:
        return state;
    }
  };