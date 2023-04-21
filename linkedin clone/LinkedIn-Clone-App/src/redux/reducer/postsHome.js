import { GET_POSTS_HOME } from "../actions";

const initialstate = {
  content: []
};

const postsHomeStorage = (state = initialstate, action) => {
  switch (action.type) {
    case GET_POSTS_HOME:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};


export default postsHomeStorage;