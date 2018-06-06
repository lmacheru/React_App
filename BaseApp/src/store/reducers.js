//routes will have modules that have their own reducing functionality
//managing state for each route

import {combineReducers } from "redux";
import {HomeReducer as home} from "../routes/Home/Modules/home";
export const MakeRootReducer = () => {
//its a helper function that will combine all functions from different functions
//to turn them into a single reducer and pass it 
    return combineReducers({
        home
    });
}

export default MakeRootReducer;