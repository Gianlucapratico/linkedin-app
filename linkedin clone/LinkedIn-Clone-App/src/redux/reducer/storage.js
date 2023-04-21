import { GET_MY_PROFILE } from "../actions";


const initialstate = {
  content: null
};

const functionStorage = (state = initialstate, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};


export default functionStorage;