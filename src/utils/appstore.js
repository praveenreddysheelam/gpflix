import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";
import GptSlice from "./GptSlice";
import configReducer from "./configSlice";
const appStore=configureStore(
    {
        reducer:{
            user:userSlice,
            movies:movieReducer,
            gpt:GptSlice,
            config:configReducer,
        },
    }
);
export default appStore;