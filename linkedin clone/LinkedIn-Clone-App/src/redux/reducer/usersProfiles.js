import { GET_USERS_PROFILES } from "../actions";

const initialstate = {
  content: []
};

const profilesStorage = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USERS_PROFILES:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};


export default profilesStorage;