import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore(
    {
        reducer:{
            user:UserReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            appconfigs:configReducer
        },
    }
)
export default appStore;