import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./reducers";
import {createLogger} from "redux-logger";

const log = createLogger({diff: true,collapsed:true});

// a function which creates oursoter and auto-persist the data

export default (initialState ={}) =>{

    //Middleware config
    const Middleware = [thunk,log];

    //store Enhancers
    const enhancers = [];

    //store instantiation

    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...Middleware),
            ...enhancers
        
        )
    );
    return store;
};
