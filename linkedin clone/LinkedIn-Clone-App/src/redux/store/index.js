import { configureStore, combineReducers } from "@reduxjs/toolkit";
import functionStorage from "../reducer/storage";
import profilesStorage from "../reducer/usersProfiles";
import postsHomeStorage from "../reducer/postsHome";


const rootReducer = combineReducers({
  myprofile: functionStorage,
  usersProfiles: profilesStorage,
  postsHome: postsHomeStorage
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;